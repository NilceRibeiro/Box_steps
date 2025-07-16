import React from 'react';
import './Textarea.css';

interface InputProps {
label: string;
placeholder: string;
value: string;
onChange: (value: string) => void;
required?: boolean; 
}

export const Input: React.FC<InputProps> = ({ label, placeholder, value, onChange }) => (
(
    <div style={{ marginBottom: 16 }}>
      <label style={{ display: 'block', marginBottom: 4, fontFamily: "arial" }}>
        <label>{label}</label>
      </label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: '96%',
          padding: 8,
          borderRadius: 4,
          border: '1px solid #ccc'
        }}
      />
    </div>
  ));