import styled from "styled-components"

export const Container = styled.div`
  height: 80px;
  padding: 0 30px;
  color: #fff;
  background: #00c1b4;
  display: flex;
  align-items: center;

  >header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    >button {
      padding: 10px;
      background: transparent;
      color: #fff;
      border: 1px solid #eee;
      transition: background .8s;

      &:hover {
        background: #07b0a5;
        border: 0;
      }
    }
  }
`;

