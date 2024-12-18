import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background: ${(props) => props.Background};
  padding-top: 100px;
  height: calc(100vh - 100px);
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  left: 20px;
  width: 200px;
  height: 200px;
  color: white;
`;
const companyLogoSpin = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Logo = styled.img`
  height: 100px;
  animation: ${companyLogoSpin} infinite 20s linear;

  @media (max-width: 768px) {
    animation: none;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 800px;
  padding: 5px 10px;
  background-color: white;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
`;

export const ContentGradient = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: black;
  color: white;
  padding: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;
