import React from 'react';

type Step = {
  nome: string;
  ordem: number;
};

interface StepsProps {
  steps: Step[];
  currentStep: number;
}

export const Steps: React.FC<StepsProps> = ({ steps, currentStep }) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    {steps.map((step, index) => (
      <React.Fragment key={step.ordem}>
        <div style={{ textAlign: 'center', flex: 1 }}>
          <div
            style={{
              backgroundColor: currentStep === step.ordem ? '#6200ea' : '#8B0000',
              color: '#FFB6C1',
              borderRadius: '50%',
              width: 32,
              height: 32,
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold'
            }}
          >
            {step.ordem}
          </div>
          <div style={{ marginTop: 4, fontFamily: 'Comic Sans MS' }}>
            {step.nome}
          </div>
        </div>
        {index < steps.length - 1 && (
          <div style={{ margin: '0 8px', fontSize: 20, color: '#8B0000' }}>{'>'}</div>
        )}
      </React.Fragment>
    ))}
  </div>
);
