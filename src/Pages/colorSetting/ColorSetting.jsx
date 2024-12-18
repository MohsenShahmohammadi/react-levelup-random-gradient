import React from "react";
import {
  ColorSet,
  TitleGradient,
  GroupData,
  ColorShow,
  ColorInput,
  ValueInput,
} from "./style.js";

const ColorSetting = ({
  isRandomize,
  backColor,
  color1,
  color2,
  color3,
  setColor1,
  setColor2,
  setColor3,
  val1,
  val2,
  val3,
  setVal1,
  setVal2,
  setVal3,
}) => {
  const color1Handler = (code) => {
    setColor1(code);
  };
  const color2Handler = (code) => {
    setColor2(code);
  };
  const color3Handler = (code) => {
    setColor3(code);
  };
  const val1Handler = (code) => {
    const val=parseInt(code);
    setVal1(val);
  };
  const val2Handler = (code) => {
    const val=parseInt(code);
    setVal2(val);
  };
  const val3Handler = (code) => {
    const val=parseInt(code);
    setVal3(val);
  };
  return (
    <>
      <ColorSet>
        <TitleGradient>Gradient:</TitleGradient>
        <GroupData>
          <ColorShow Background={backColor} />
        </GroupData>
        <TitleGradient>Color:</TitleGradient>
        <GroupData>
          <ColorShow Background={color1} />
          <ColorInput
            disabled={isRandomize}
            value={color1}
            onChange={(e) => color1Handler(e.target.value)}
          />
          <ValueInput value={val1} onChange={(e)=>val1Handler(e.target.value)}/>
        </GroupData>
        <GroupData>
          <ColorShow Background={color2} />
          <ColorInput
            disabled={isRandomize}
            value={color2}
            onChange={(e) => color2Handler(e.target.value)}
          />
          <ValueInput  value={val2} onChange={(e)=>val2Handler(e.target.value)}/>
        </GroupData>
        <GroupData>
          <ColorShow Background={color3} />
          <ColorInput
            disabled={isRandomize}
            value={color3}
            onChange={(e) => color3Handler(e.target.value)}
          />
          <ValueInput  value={val3} onChange={(e)=>val3Handler(e.target.value)}/>
        </GroupData>
      </ColorSet>
    </>
  );
};

export default ColorSetting;
