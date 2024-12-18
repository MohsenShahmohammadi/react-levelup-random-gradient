import React from "react";
import { CodeGradi } from "./style.js";

const CodeGradient = ({text}) => {
  return (
    <>
      <div className="code-gradient">
        <CodeGradi>{text}</CodeGradi>
      </div>
    </>
  );
};

export default CodeGradient;
