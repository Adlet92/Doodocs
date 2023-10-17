import React from 'react';
import "./Button.css";

interface ButtonProps {
  isActive: boolean;
  onClick: () => void;
  disabled: boolean;
}

const Button: React.FC<ButtonProps> = ({ isActive, onClick, disabled }) => {
  return (
    <div className='button-area'>
      <button
        className={`button-next${isActive ? ' active' : ''}`}
        disabled={disabled}
        onClick={onClick}
      >
        Далее
      </button>
    </div>
  );
};

export default Button;
