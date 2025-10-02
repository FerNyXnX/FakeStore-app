import styled from 'styled-components';

// Estilos base compartidos para todos los formularios
export const BaseForm = styled.form`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.5s ease-in;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const BaseFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const BaseFormTitle = styled.h2`
  text-align: center;
  color: #764ba2;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const BaseFormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const BaseLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 500;
  font-size: 0.95rem;
  
  &.required::after {
    content: ' *';
    color: #ff6b6b;
  }
`;

export const BaseInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${props => props.$error ? '#ff6b6b' : '#ddd'};
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s;
  background: ${props => props.disabled ? '#f5f5f5' : 'white'};
  
  &:focus {
    outline: none;
    border-color: ${props => props.$error ? '#ff6b6b' : '#764ba2'};
    box-shadow: 0 0 0 3px ${props => 
      props.$error ? 'rgba(255, 107, 107, 0.1)' : 'rgba(118, 75, 162, 0.1)'
    };
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
  
  &::placeholder {
    color: #999;
  }
`;

export const BaseTextarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${props => props.$error ? '#ff6b6b' : '#ddd'};
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  min-height: 100px;
  transition: all 0.3s;
  
  &:focus {
    outline: none;
    border-color: ${props => props.$error ? '#ff6b6b' : '#764ba2'};
    box-shadow: 0 0 0 3px ${props => 
      props.$error ? 'rgba(255, 107, 107, 0.1)' : 'rgba(118, 75, 162, 0.1)'
    };
  }
  
  &::placeholder {
    color: #999;
  }
`;

export const BaseSelect = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${props => props.$error ? '#ff6b6b' : '#ddd'};
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  background: white;
  cursor: pointer;
  transition: all 0.3s;
  
  &:focus {
    outline: none;
    border-color: ${props => props.$error ? '#ff6b6b' : '#764ba2'};
    box-shadow: 0 0 0 3px ${props => 
      props.$error ? 'rgba(255, 107, 107, 0.1)' : 'rgba(118, 75, 162, 0.1)'
    };
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
    background: #f5f5f5;
  }
`;

export const BaseButton = styled.button`
  width: ${props => props.$fullWidth ? '100%' : 'auto'};
  background: ${props => {
    if (props.$variant === 'secondary') return 'transparent';
    if (props.$variant === 'danger') return '#ff6b6b';
    return '#764ba2';
  }};
  color: ${props => props.$variant === 'secondary' ? '#764ba2' : 'white'};
  border: ${props => props.$variant === 'secondary' ? '2px solid #764ba2' : 'none'};
  padding: ${props => props.$size === 'small' ? '0.5rem 1rem' : '1rem 2rem'};
  border-radius: 8px;
  font-size: ${props => props.$size === 'small' ? '0.9rem' : '1rem'};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover:not(:disabled) {
    background: ${props => {
      if (props.$variant === 'secondary') return '#764ba2';
      if (props.$variant === 'danger') return '#ff5252';
      return '#5a3a7e';
    }};
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
  
  &:disabled {
    background: #ccc;
    color: #666;
    cursor: not-allowed;
    border: none;
  }
`;

export const BaseErrorMessage = styled.span`
  display: block;
  color: #ff6b6b;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  animation: shake 0.3s;
  
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
  }
`;

export const BaseSuccessMessage = styled.span`
  display: block;
  color: #4caf50;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

export const BaseHelpText = styled.p`
  color: #666;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  font-style: italic;
`;

export const BaseFormRow = styled.div`
  display: grid;
  grid-template-columns: ${props => props.$columns || '1fr 1fr'};
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const BaseCheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  margin-bottom: 1rem;
  
  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
    accent-color: #764ba2;
  }
  
  span {
    color: #333;
    font-size: 0.95rem;
  }
`;

export const BaseRadioContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.$inline ? 'row' : 'column'};
  gap: ${props => props.$inline ? '1.5rem' : '0.75rem'};
  margin-bottom: 1rem;
`;

export const BaseRadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  
  input[type="radio"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
    accent-color: #764ba2;
  }
  
  span {
    color: #333;
    font-size: 0.95rem;
  }
`;

export const BaseFormDivider = styled.div`
  margin: 2rem 0;
  border-top: 1px solid #eee;
  position: relative;
  
  &::before {
    content: '${props => props.$text || ''}';
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    padding: 0 1rem;
    color: #999;
    font-size: 0.875rem;
  }
`;

export const BaseFormFooter = styled.div`
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: ${props => props.$align || 'space-between'};
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const BaseFieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  
  legend {
    color: #764ba2;
    font-weight: 600;
    padding: 0 0.5rem;
  }
`;