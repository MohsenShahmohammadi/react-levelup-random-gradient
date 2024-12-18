import styled from "styled-components";

export const GeneralSet = styled.div`
  width: 35%;
  position: relative;
  &::before {
    position: absolute;
    content: "";
    top: 30px;
    left: -40px;
    width: 1px;
    height: 200px;
    padding-bottom: 30px;
    background-color: #c1c1c1;
  }
`;

export const GradientGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
`;

export const CheckBox = styled.input.attrs({ type: "checkbox" })`
  margin-right: 5px;
  width: 20px;
  height: 20px;
  accent-color: #4caf50;
  &:checked {
    background-color: darkcyan;
  }
`;
export const InputNumber = styled.input.attrs({
  type: "number",
  min: 0,
  max: 360,
})`
border: 1px solid black;
border-radius: 5px;
padding: 7px 10px;
width: 50px;
margin: 0 10px;
  }
`;
export const ButtonGradient = styled.button`
  padding: 10px 15px;
  margin: 0 5px;
  border-radius: 5px;
  cursor: pointer;
  background-color: darkcyan;
  color: white;
  transition: all 0.5s;
  font-size: 1.1rem;
  &::hover {
    background-color: cyan;
    color: black;
  }
`;
export const Label = styled.label`
  font-size: 0.9rem;
`;

export const RotateInput = styled.input`
  border: 1px solid black;
  border-radius: 5px;
  padding: 7px 10px;
  width: 50px;
  margin: 0 10px;
`;

export const ShowBox = styled.div`
  width: 250px;
  height: 150px;
  border-radius: 10px;
  background: ${(prop) => prop.Background};
`;
