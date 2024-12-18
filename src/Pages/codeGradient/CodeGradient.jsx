import React from "react";
import { CodeGradi,Code } from "./style.js";

const CodeGradient = ({text}) => {
  return (
    <>
      <CodeGradi>
        <Code>{text}</Code>
      </CodeGradi>
    </>
  );
};

export default CodeGradient;
