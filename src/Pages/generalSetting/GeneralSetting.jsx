import React, { useRef, useState,rotate,setRotate } from "react";
import {
  CheckBox,
  GeneralSet,
  GradientGroup,
  Label,
  ButtonGradient,
  ShowBox,
  InputNumber,
  ButtonRand
} from "./style.js";

const GeneralSetting = ({ backColor,isRandomize,setIsRandomize,ColorHandler,GradientTypeHandler,rotate,setRotate }) => {
  const RotateRef=useRef();
  const RandStatusHandler=()=>{
    setIsRandomize(!isRandomize);
  }
  const GradientHandler=(type)=>{
    const number=parseInt(RotateRef.current.value);
    GradientTypeHandler(type,number)
  }
  const rotateHandler=(num)=>{
    const val=parseInt(num);
    setRotate(val)
  }
  return (
    <>
      <GeneralSet>
        <GradientGroup>
          <CheckBox checked={isRandomize} onChange={RandStatusHandler} />
          <Label>Dynamic Color</Label>
          <ButtonRand onClick={ColorHandler} Background={backColor}>Random Color</ButtonRand>
        </GradientGroup>
        <GradientGroup>
          <ButtonGradient onClick={()=>GradientHandler("linear")}>Linear</ButtonGradient>
          <ButtonGradient onClick={()=>GradientHandler("radial")}>Redial</ButtonGradient>
        </GradientGroup>
        <GradientGroup>
          <Label ref={RotateRef}>Rotate:</Label>
          <InputNumber value={rotate} onChange={(e)=>rotateHandler(e.target.value)}/>
        </GradientGroup>
        <GradientGroup>
          <ShowBox Background={backColor}></ShowBox>
        </GradientGroup>
      </GeneralSet>
    </>
  );
};

export default GeneralSetting;
