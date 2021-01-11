import React from 'react';

const Button = ({
  label, onClick, isSubmit = false, className = '',
}) => (
  <button
    type={isSubmit ? 'submit' : 'button'}
    className={`button-container ${className}`}
    onClick={isSubmit ? () => {} : onClick}
  >
    {label}
  </button>
);

export default Button;
