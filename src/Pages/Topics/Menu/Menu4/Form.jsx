import React from "react";

const Form = (props) => {
  return (
    <div>
      <form>
        <div className='row'>
          <div className='col'>
            <input
              type='text'
              placeholder='enter value'
              name={props.name}
              value={props.value}
              onChange={props.onChange}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <button onClick={props.onClick}>swap</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
