import React from 'react';

interface ButtonProps {
  texto: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ texto, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: '#6200ea',
        color: '#fff',
        padding: '10px 16px',
        border: 'none',
        borderRadius: 4,
        cursor: 'pointer',
        float: 'right'
      }}
    >
      {texto}
    </button>
  );
};

export default Button;