import React from 'react';

const FlatButton = ({ type, className, children, ...other }) => (
  <button
    className={`active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ${className}`}
    type={type ? type : 'button'}
    {...other}
  >
    {children}
  </button>
);

export default FlatButton;
