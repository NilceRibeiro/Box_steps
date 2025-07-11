import React from 'react';

interface InputProps {
  label: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ label, placeholder, required, value, onChange }) => {
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{ display: 'block', marginBottom: 4, fontFamily: "arial" }}>
        {label} {required && '*'}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          width: '96%',
          padding: 8,
          borderRadius: 4,
          border: '1px solid #ccc'
        }}
      />
    </div>
  );
};

export default Input;