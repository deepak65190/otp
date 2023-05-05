import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
function Pin({ length, pinSet }) {
  const [inputBoxLength] = useState(new Array(length).fill(""));
  const inputRef = useRef([]);
  const [inputBoxValue] = useState(new Array(length).fill(""));

  const hanelChange = (e, index) => {
     let value = e.target.value;
     
     let reg = /^-?\d*\.?\d*$/;
     if(reg.test(value)){
 inputBoxValue[index] = e.target.value;
     }
   
    if (e.target.value.length > 0 && index < length - 1 &&reg.test(value)) {
      inputRef.current[index + 1].focus();
    }
    pinSet(inputBoxValue.join(""));
  };

  const backSpaceHandle = (e, index) => {
    if (index > 0) {
      inputRef.current[index - 1].focus();
    }
  };

  const handleKeyUp = (e, index) => {
    if (e.keyCode === 8) {
      backSpaceHandle(e, index);
    }
    let value = e.target.value;

    let reg = /^-?\d*\.?\d*$/;
    if(reg.test(value)){
 inputBoxValue[index] = e.target.value;
 pinSet(inputBoxValue.join(""));
    }
   
  };
  const handlePase = (e) => {

    e.preventDefault();
    let value = e.target.value;
    let reg = /^-?\d*\.?\d*$/;
    if(reg.test(value)){
 const data = e.clipboardData
   .getData("text")
   .split("")
   .filter((item, ind) => ind < length);
 data.forEach((item, ind) => {
   inputBoxValue[ind] = item;
   inputRef.current[ind].value = item;
   if (ind < length - 1) {
     inputRef.current[ind + 1].focus();
   }
 });
    }
   
  };
  return (
    <div onPaste={handlePase}>
      {inputBoxLength.map((_, index) => {
        return (
          <input
            ref={(inputRefElement) => {
              inputRef.current[index] = inputRefElement;
            }}
            key={index}
            maxLength={1}
            onChange={(e) => hanelChange(e, index)}
            onKeyUp={(e) => handleKeyUp(e, index)} 
           
          />
        );
      })}
    </div>
  );
}

export default Pin;
Pin.propTypes = {
  length: PropTypes.number.isRequired,
};
