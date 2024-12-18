import React from "react";
import Marker from "../../components/markerGradient/Marker.jsx";
import { GradientContainer, Gradient } from "./style.js";

const ShowGradient = ({Val1,Val2,Val3,BackColor}) => {
  return (
    <>
      <GradientContainer>
        <Gradient Background={BackColor}>
          <Marker value1={Val1} value2={Val2} value3={Val3} />
        </Gradient>
      </GradientContainer>
    </>
  );
};

export default ShowGradient;
