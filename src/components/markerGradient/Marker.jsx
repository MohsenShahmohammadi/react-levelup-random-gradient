import React from "react";
import { MarkerHanger, MarkerValue } from "./style.js";

const Marker = ({ value1, value2, value3 }) => {
  return (
    <>
      {value1 && (
        <MarkerHanger startValue={value1}>
          <MarkerValue startValue={value1}>{value1}</MarkerValue>
        </MarkerHanger>
      )}
      {value2 && (
        <MarkerHanger startValue={value2}>
          <MarkerValue startValue={value2}>{value2}</MarkerValue>
        </MarkerHanger>
      )}
      {value3 && (
        <MarkerHanger startValue={value3}>
          <MarkerValue startValue={value3}>{value3}</MarkerValue>
        </MarkerHanger>
      )}
    </>
  );
};

export default Marker;
