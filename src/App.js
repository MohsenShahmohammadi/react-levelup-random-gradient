import logo from "../src/assets/images/logo.svg";
import CodeGradient from "./Pages/codeGradient/CodeGradient";
import ColorSetting from "./Pages/colorSetting/ColorSetting";
import GeneralSetting from "./Pages/generalSetting/GeneralSetting";
import ShowGradient from "./Pages/showGradient/ShowGradient";
import {
  Container,
  Header,
  Main,
  ContentGradient,
  Footer,
  Logo,
} from "./style.js";

function App() {
  return (
    <>
      <Container Background="red">
        <Header>
          {/* <img src={logo} className="company-logo" alt="logo" /> */}
          <Logo src={logo} alt="logo" />
          <h1>Let's Learn</h1>
        </Header>
        <Main>
          <ShowGradient Val1="0%" Val2="45%" Val3="100%" BackColor="blue" />
          <ContentGradient>
            <ColorSetting />
            <GeneralSetting BackColor="red" />
          </ContentGradient>
          <CodeGradient text="hi" />
        </Main>
        <Footer>
          <span>@copyright 2025</span>
        </Footer>
      </Container>
    </>
  );
}

export default App;
