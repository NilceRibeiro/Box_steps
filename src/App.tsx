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
    projeto: '',
  });

  const handleChange = (field: string) => (value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const [currentStep, setCurrentStep] = useState(1);
  const [save, setSave] = useState(false);

  const steps = [
    { nome: 'Contato', ordem: 1 },
    { nome: 'Empresa', ordem: 2 },
    { nome: 'Projeto', ordem: 3 },
  ];

  const handleNextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(prev => prev + 1);
    } else if (currentStep === steps.length) {
      setSave(true);
      alert('Cadastro enviado com sucesso!');
    }
  };

  const handlePreviuStep = () => {
    if (currentStep === steps.length) {
      setSave(false);
    }
    if (currentStep < steps.length + 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: "100vh" }}>
      <Box>
        <Steps steps={steps} currentStep={currentStep} />
        <Divisor />
        
        {currentStep === 1 && (
          <div>
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
            <br /><br /><br />
            <div style={{ marginTop: '13px' }}>
              <Button texto="CONTINUAR" onClick={handleNextStep} fundo='#6200ea' cor='white' float='right' />
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <Input
              label="Nome da Empresa"
              placeholder="Infome o nome da empresa"
              required
              value={formData.nomeempresa}
              onChange={handleChange('nomeempresa')}
            />
            <Input
              label="Número de Funcionários"
              placeholder="Insira o número de funcionários"
              value={formData.nfuncionario}
              onChange={handleChange('nfuncionario')}
            />
            <Textarea 
              label="Sobre seu Negócio"
              placeholder="Fale sobre seus serviços e produtos"
              value={formData.sobre}
              onChange={handleChange('sobre')}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button texto='Voltar' onClick={handlePreviuStep} fundo='white' cor='#6200ea' float='left' />
              <Button texto="CONTINUAR" onClick={handleNextStep} fundo='#6200ea' cor='white' float='right' />
            </div>
            <div style={{ marginTop: '13px' }}></div>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <Textarea 
              label="Sobre seu Projeto"
              placeholder="Descreva quais são os objetivos do projeto"
              value={formData.projeto}
              onChange={handleChange('projeto')}
            />
            <div style={{ marginTop: '160px' }}></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button texto='Voltar' onClick={handlePreviuStep} fundo='white' cor='#6200ea' float='left' />
              <Button texto="ENVIAR" onClick={handleNextStep} fundo='#6200ea' cor='white' float='right' />
            </div>
          </div>
        )}
      </Box>
    </div>
  );
};

export default App;