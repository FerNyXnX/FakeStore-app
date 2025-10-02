import styled from 'styled-components';

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  
  p {
    margin-top: 1rem;
    color: white;
    font-size: 1.1rem;
  }
`;

export const Spinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const MessageContainer = styled.div`
  background: ${props => {
    switch(props.$type) {
      case 'success': return '#4caf50';
      case 'error': return '#f44336';
      case 'warning': return '#ff9800';
      default: return '#2196f3';
    }
  }};
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  margin: 1rem 0;
  text-align: center;
  font-weight: 500;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;