import React, {useCallback, useRef, useState} from "react"
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from "yup"
import api from "../../services/api"
import {toast} from "react-toastify"

import {Container, Error} from "./styles"
import Input from "../../components/Input"

export default function SignIn(){
  const [errors, setErrors] = useState([])

  const formRef = useRef(null);
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data, {reset}) => {
      try {
        formRef.current.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email Obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string()
            .min(6, "No mínimo 6 caracteres")
            .required('Senha Obrigatória'),
        });

        // retorna todos os erros de validação
        await schema.validate(data, {
          abortEarly: false,
        });

        const response = await api.post('/session', {email: data.email, password: data.password})
        const {user, token} = response.data

        localStorage.setItem('@confere:token', token);
        localStorage.setItem('@confere:user', JSON.stringify(user));

        reset();
        history.push('/board');
      } catch (err) {
        toast.error("Erro ao fazer login")
        if (err instanceof Yup.ValidationError) {
          setErrors(err.errors)
        }
      }
    },
    [history],
  );

  return(
    <Container>
       <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>
          {errors && errors.map(err => <Error>{err}</Error>)}
          <Input 
            name="email" 
            placeholder="Digite seu E-mail"
            />
          <Input
            name="password"
            type="password"
            placeholder="Digite sua senha"
          />
          <button type="submit">Entrar</button>
        </Form>
    </Container>
  )
}