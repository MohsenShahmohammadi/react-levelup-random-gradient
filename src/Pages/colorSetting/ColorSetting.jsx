import React from "react";
import {
  ColorSet,
  TitleGradient,
  GroupData,
  ColorShow,
  ColorInput,
  ValueInput,
} from "./style.js";

const ColorSetting = () => {
  return (
    <>
      <ColorSet>
        <TitleGradient>Background:</TitleGradient>
        <GroupData>
          <ColorShow Background="blue"/>
          <ColorInput />
        </GroupData>
        <TitleGradient>Color:</TitleGradient>
        <GroupData>
          <ColorShow Background="red"/>
          <ColorInput />
          <ValueInput />
        </GroupData>
        <GroupData>
          <ColorShow Background="black"/>
          <ColorInput />
          <ValueInput />
        </GroupData>
        <GroupData>
          <ColorShow Background="black"/>
          <ColorInput />
          <ValueInput />
        </GroupData>
      </ColorSet>
    </>
  );
};

export default ColorSetting;
