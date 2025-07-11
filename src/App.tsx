import React, { useState } from 'react';
import Box from './components/box';
import Divisor from './components/Divisor';
import Steps from './components/Steps';
import Input from './components/Input';
import Button from './components/Button';

const App: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: ''
  });

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const steps = [
    { nome: 'Contato', ordem: 1 },
    { nome: 'Empresa', ordem: 2 },
    { nome: 'Projeto', ordem: 3 }
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: "100vh"}}>
      <Box>
        <Steps steps={steps} currentStep={1} />
        <Divisor />
        <Input
          label="Nome"
          placeholder="Como prefere ser chamado (a)"
          required
          value={formData.nome}
          onChange={handleChange('nome')}
        />
        <Input
          label="Telefone"
          placeholder="Insira seu número de telefone"
          value={formData.telefone}
          onChange={handleChange('telefone')}
        />
        <Input
          label="E-mail"
          placeholder="Informe seu e-mail"
          required
          value={formData.email}
          onChange={handleChange('email')}
        />
        <Button texto="CONTINUAR" onClick={() => alert('Próxima etapa')} />
      </Box>
    </div>
  );
};

export default App;
