import React from 'react';

const Button = ({ type, className, children, ...other }) => (
  <button
    className={`text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ${className}`}
    type={type ? type : 'button'}
    {...other}
  >
    {children}
  </button>
);

export default Button;
