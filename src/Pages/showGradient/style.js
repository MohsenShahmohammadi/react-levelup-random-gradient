import styled from "styled-components";

export const GradientContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  margin-bottom: 5px;
`;

export const Gradient = styled.div`
  position: relative;
  content: "";
  height: 30px;
  border: 1px solid black;
  border-radius: 5px;
  background: ${(prop)=>prop.Background};
  margin: 0 10px;
  &::after {
    position: absolute;
    content: "";
    top: 53px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #c1c1c1;
  }
`;
