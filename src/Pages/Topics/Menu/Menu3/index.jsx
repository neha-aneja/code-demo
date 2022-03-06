import React, { useState } from "react";

const Swap = () => {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  const inputEvent1 = (event) => {
    setInputValue1(event.target.value);
    //setInputValue2(event.target.value);
  };

  const inputEvent2 = (event) => {
    //setInputValue1(event.target.value);
    setInputValue2(event.target.value);
  };

  const swapFun1 = (event) => {
    event.preventDefault();
    console.log(inputValue1);
    setInputValue2(inputValue1);
    setInputValue1("");
    //console.log(inputValue2);
  };

  const swapFun2 = (event) => {
    event.preventDefault();
    //console.log(inputValue1);
    console.log(inputValue2);
    setInputValue1(inputValue2);
    setInputValue2("");
  };

  return (
    <div className='container'>
      <form>
        <div className='row'>
          <div className='col'>
            <input
              type='text'
              placeholder='enter value'
              name='input1'
              value={inputValue1}
              onChange={inputEvent1}
            />
            {/* <button>swap</button> */}
          </div>
          <div className='col'>
            <input
              type='text'
              placeholder='enter value'
              name='input2'
              value={inputValue2}
              onChange={inputEvent2}
            />
            {/* <button>swap</button> */}
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            {/* <input type='text' placeholder='enter value'/> */}
            <button onClick={swapFun1}>swap</button>
          </div>
          <div className='col'>
            {/* <input type='text' placeholder='enter value'/> */}
            <button onClick={swapFun2}>swap</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Swap;
