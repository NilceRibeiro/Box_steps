import React from 'react';

interface ButtonProps {
  texto: string;
  onClick: () => void;
  comBackground?: boolean;
  fundo: string;
  cor: string;
  float: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({ texto, onClick, comBackground = true, fundo, cor, float}) => (
    <button
      onClick={onClick}
      style={{
        backgroundColor: fundo,
        color: cor,
        padding: '10px 16px',
        border: 'none',
        borderRadius: 4,
        cursor: 'pointer',
        float: float
          }}
  >
    {texto}
  </button>
)