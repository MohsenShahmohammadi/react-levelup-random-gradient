import styled from "styled-components";

export const ColorSet = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const TitleGradient = styled.span`
  font-size: 0.8rem;
`;
export const GroupData = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
`;
export const ColorShow = styled.div`
  width: 50px;
  height: 30px;
  background-color: ${(props)=>props.Background};
  border: 2px solid yellow;
  border-radius: 5px;
  margin-left: 10px;
`;
export const ColorInput = styled.input`
  border: 1px solid black;
  border-radius: 5px;
  padding: 7px 10px;
  margin: 0 10px;
`;
export const ValueInput = styled.input`
  border: 1px solid black;
  border-radius: 5px;
  padding: 7px 10px;
  width: 30px;
  font-size: 0.8rem;
`;
