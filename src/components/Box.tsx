
import React from 'react';

export const Box: React.FC<{ children: React.ReactNode }> = ({ children }) => (

    <div style={{
      border: '1px solid #ccc',
      borderRadius: 8,
      padding: 24,
      width: 435,
      height: 400,
      backgroundColor: '#ADD8E6'
    }}>
      {children}
    </div>
  );
