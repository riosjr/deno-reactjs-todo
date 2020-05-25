import React, { useState, useRef } from 'react';
import './styles.css';

const Switch = ({ label, ...other }) => {
  const [toggleStyle, setToggleStyle] = useState('bg-red-400');
  const inputRef = useRef();
  console.log(other);
  const onToggle = () => {
    const _style = inputRef.current.checked ? 'bg-green-400' : 'bg-red-400';
    setToggleStyle(_style);
  };
  return (
    <div className={'btn-status rounded-full ' + toggleStyle}>
      <input
        type="checkbox"
        /* name="checkbox"
          id="owa" */
        {...other}
        className="hidden"
        ref={inputRef}
        onChange={() => onToggle()}
      />
      <label
        htmlFor={other.id}
        className={
          'btn-change flex items-center p-1 rounded-lg w-12 h-6 cursor-pointer' +
          toggleStyle
        }
      ></label>
    </div>
  );
};

export default Switch;
