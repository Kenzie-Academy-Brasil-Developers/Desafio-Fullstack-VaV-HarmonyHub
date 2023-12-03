import React from 'react';
import { StyledButton } from './style';

interface ButtonProps {
  children: React.ReactNode;
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  buttonVariation?: string;
}

const Button = ({ children, onClick, type, buttonVariation }: ButtonProps) => {
  return (
    <StyledButton
      buttonVariation={buttonVariation}
      type={type}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
