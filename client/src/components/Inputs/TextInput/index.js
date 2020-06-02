import React from 'react';

const TextInput = ({ label, error, ...props }) => {
  return (
    <div className="w-full px-3 mb-6">
      {label && (
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor={props.id}
        >
          {label}
        </label>
      )}
      <input
        className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
          error ? 'border-red-500' : 'border-gray-200 focus:border-gray-500'
        } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
        /*
         id="grid-first-name"
        type="text" 
        placeholder="Jane"*/
        {...props}
      />
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  );
};

export default TextInput;
