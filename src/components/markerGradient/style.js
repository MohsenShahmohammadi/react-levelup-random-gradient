import styled from "styled-components";

export const MarkerHanger = styled.div`
  position:relative,
  content: "";
  &::after {
    position: absolute;
    content: "";
    top: -5px;
    left: calc(${(props)=>props.startValue} - 3px);
    width: 8px;
    height: 50px;
    border: 1px solid black;
    background-color: #c1c1c1;
  }
`;
export const MarkerValue=styled.span`
position: absolute;
z-index: 100;
border: 1px solid black;
background-color: #c1c1c1;
padding: 5px;
top: 40px;
left: calc(${(props)=>props.startValue} - 13px);
width: 20px;
height: 15px;
text-align: center;
font-size: 0.7rem;
`