import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-wrap:wrap;
  padding: 30px 0;
  height: calc(100% - 80px);
  max-width: 1080px;

  @media(max-width: 1020px) {
    flex-direction: row;
  }
`;