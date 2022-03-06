import React, { useState } from "react";
import Form from "./Form";

const Swap = () => {
  const [inputValue, setInputValue] = useState({
    input1: "",
    input2: "",
  });

  const inputEvent = (event, preValue) => {
    const value = event.target.value;
    const name = event.target.name;

    setInputValue((preValue) => {
      if (name === "input1") {
        return {
          input1: value,
        };
      } else if (name === "input2") {
        return {
          input2: value,
        };
      }
    });
  };

  const swapFun1 = (event) => {
    event.preventDefault();
    setInputValue((preValue) => {
      return {
        input1: "",
        input2: preValue.input1,
      };
    });
  };

  const swapFun2 = (event) => {
    event.preventDefault();
    setInputValue((preValue) => {
      return {
        input1: preValue.input2,
        input2: "",
      };
    });
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <Form
            name='input1'
            value={inputValue.input1}
            onChange={inputEvent}
            onClick={swapFun1}
          />
        </div>
        <div className='col'>
          <Form
            name='input2'
            value={inputValue.input2}
            onChange={inputEvent}
            onClick={swapFun2}
          />
        </div>
      </div>
    </div>
  );
};

export default Swap;
