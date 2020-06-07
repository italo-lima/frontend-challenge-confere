import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    padding-bottom: 10px;
    width: 300px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);
    background: #fff;

    h1 {
      border-top: 10px solid #00c1b4;
      font-size: 24px;
      text-align: center;
      padding-top: 20px;
      color: #000;
      font-weight: bold;
    }

    input {
      margin: 10px;
      padding: 10px;
      height: 40px;
      border-radius: 5px;
      border: 1px solid #e0e0e0;

      &::placeholder{
        color: rgba(0,0,0, 0.4);
      }
    }

    button {
      height: 40px;
      margin: 10px;
      border: 0;
      background: #00c1b4;
      color: #fff;
      padding: 5px 0;
    }
  }
`;

export const Error = styled.span`
  font-size: 10px;
  padding: 5px 10px ;
  color: #f00;

`;