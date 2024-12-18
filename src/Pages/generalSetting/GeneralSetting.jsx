import React from "react";
import {
  CheckBox,
  GeneralSet,
  GradientGroup,
  Label,
  ButtonGradient,
  ShowBox,
  InputNumber,
} from "./style.js";

const GeneralSetting = ({ BackColor }) => {
  return (
    <>
      <GeneralSet>
        <GradientGroup>
          <CheckBox />
          <Label>Dynamic Color</Label>
        </GradientGroup>
        <GradientGroup>
          <ButtonGradient>Linear</ButtonGradient>
          <ButtonGradient>Redial</ButtonGradient>
        </GradientGroup>
        <GradientGroup>
          <Label>Rotate:</Label>
          <InputNumber />
        </GradientGroup>
        <GradientGroup>
          <ShowBox Background={BackColor}></ShowBox>
        </GradientGroup>
      </GeneralSet>
    </>
  );
};

export default GeneralSetting;
