import { useEffect, useState } from "react";
import logo from "../src/assets/images/logo.svg";
import CodeGradient from "./Pages/codeGradient/CodeGradient";
import ColorSetting from "./Pages/colorSetting/ColorSetting";
import GeneralSetting from "./Pages/generalSetting/GeneralSetting";
import { getRandomColor,hexToRGB } from "./util/colorUtil.js";
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
  const [color1, setColor1] = useState("#6C0CDD");
  const [color2, setColor2] = useState("#91CCA9");
  const [color3, setColor3] = useState("#29A3A9");
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(45);
  const [val3, setVal3] = useState(100);
  const [rotate, setRotate] = useState(45);

  const [bgColor, setBgColor] = useState("green");
  const [isRandomize, setIsRandomize] = useState(true);
  const [gradientType, setGradientType] = useState("linear");

  const ColorRandom = () => {
    setColor1(getRandomColor());
    setColor2(getRandomColor());
    setColor3(getRandomColor());
  };

  const GradientTypeHandler = (typeGradient, rotateGradient) => {
    setGradientType(typeGradient);
  };
  
  const GradientHandler = () => {
    const color1RGB = hexToRGB(color1);
    const color2RGB = hexToRGB(color2);
    const color3RGB = hexToRGB(color3);
    const type = gradientType === "linear" ? rotate + "deg" : "circle";

    const result =
      gradientType +
      "-gradient(" +
      type +
      ", " +
      color1RGB +
      val1 +
      "%, " +
      color2RGB +
      val2 +
      "%, " +
      color3RGB +
      val3 +
      "%);";
    setBgColor(result);
  };
  useEffect(() => {
    GradientHandler();
  }, [color1, color2, color3, val1, val2, val3, rotate, gradientType]);
  return (
    <>
      <Container Background={bgColor}>
        <Header>
          {/* <img src={logo} className="company-logo" alt="logo" /> */}
          <Logo src={logo} alt="logo" />
          <h1>Let's Learn</h1>
        </Header>
        <Main>
          <ShowGradient
            Val1={val1}
            Val2={val2}
            Val3={val3}
            BackColor={bgColor}
          />
          <ContentGradient>
            <ColorSetting
              isRandomize={isRandomize}
              backColor={bgColor}
              color1={color1}
              color2={color2}
              color3={color3}
              setColor1={setColor1}
              setColor2={setColor2}
              setColor3={setColor3}
              val1={val1}
              val2={val2}
              val3={val3}
              setVal1={setVal1}
              setVal2={setVal2}
              setVal3={setVal3}
            />
            <GeneralSetting
              backColor={bgColor}
              isRandomize={isRandomize}
              setIsRandomize={setIsRandomize}
              ColorHandler={ColorRandom}
              GradientTypeHandler={(a, b) => GradientTypeHandler(a, b)}
              rotate={rotate}
              setRotate={setRotate}
            />
          </ContentGradient>
          <CodeGradient text={bgColor} />
        </Main>
        <Footer>
          <span>@copyright 2025</span>
        </Footer>
      </Container>
    </>
  );
}

export default App;
