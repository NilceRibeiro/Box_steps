import React, { useState } from 'react';
import { Box } from './components/Box';
import { Divisor } from './components/Divisor'; 
import { Steps } from './components/Steps';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { Textarea } from './components/Textarea';


const App: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    nomeempresa: '',
    nfuncionario: '',
    sobre: '',
  });

  
const handleChange = (field: string) => (value: string) => {
  setFormData({ ...formData, [field]: value });
};
const [currentStep, setCurrentStep] = useState(1)

  const steps = [
    { nome: 'Contato', ordem: 1 },
    { nome: 'Empresa', ordem: 2 },
    { nome: 'Projeto', ordem: 3 }
  ];

const handleNextStep = () => {
  if (currentStep < steps.length) {
    setCurrentStep(prev => prev +1)
  }
}
const handlePreviuStep = () => {
  if (currentStep < steps.length) {
    setCurrentStep(prev => prev - 1)
  }
}


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: "100vh"}}>
      <Box>
        <Steps steps={steps} currentStep={currentStep} />
        <Divisor />
        {currentStep === 1 && <div>
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
        <Button texto="CONTINUAR" onClick={handleNextStep} fundo='#6200ea' cor='white' float='right' /> </div>}
        {currentStep === 2 && <div>
        <Input
          label="Nome da Empresa"
          placeholder="Como prefere ser chamado (a)"
          required
          value={formData.nomeempresa}
          onChange={handleChange('nomeempresa')}
        />
        <Input
          label="Número de Funcionários"
          placeholder="Insira seu número de telefone"
          value={formData.nfuncionario}
          onChange={handleChange('nfuncionario')}
        />
       <Textarea 
          label="Sobre seu Negócio"
          placeholder="Fale sobre seus serviços e produtos"
          value = {formData.sobre}
          onChange={handleChange('sobre')} />
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <Button texto = 'Voltar' onClick={handlePreviuStep} fundo='white' cor='#6200ea' float='left' />
        <Button texto="CONTINUAR" onClick={handleNextStep} fundo='#6200ea' cor='white' float='right' />
       </div> </div>}
      </Box>
    </div>
  );
};

export default App;
