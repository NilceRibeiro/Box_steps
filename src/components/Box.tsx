import React from 'react';

interface BoxProps {
  children: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ children }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: 8,
      padding: 24,
      width: 400,
      backgroundColor: '#ADD8E6'
    }}>
      {children}
    </div>
  );
};

export default Box;
