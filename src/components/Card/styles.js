import styled, {css} from "styled-components"

export const Container = styled.div`
  background: #fff;
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 15px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  cursor: grab;

  header {
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;

      p {
        font-size: 10px;
        font-weight: 500;
        margin-right: 10px;
        margin-bottom: 0;
      }
    }

    button {
      border: 0;
      padding: 5px;
      background: transparent;
    }

    svg {
      border-radius: 2px;
    }

  /* ${props => props.isDragging && css`
    border: 2px dashed rgba(0,0,0, 0.2);
    padding: 31px;
    border-radius; 0;
    background: transparent;
    box-shadow: none;
    cursor: grabbing;

    p, svg, header {
      opacity: 0;
    }
  `} */
  }
  
`;

export const Description = styled.div`
  padding: 5px 0;

  div {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;

    p {
      font-size: 14px;
    }
  }

`;