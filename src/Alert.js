import React from 'react';

const Alert = ({ msg,type }) => {
  function show() {
    return (
      <h1 className={`alert alert-${type} text-center`}>{msg}</h1>
    );
  }
  return show()
};

export default Alert;