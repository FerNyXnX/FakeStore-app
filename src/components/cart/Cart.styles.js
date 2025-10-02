import styled from 'styled-components';

export const CartContainer = styled.div`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  min-height: 400px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #764ba2;
`;

export const CartTitle = styled.h2`
  color: #764ba2;
  font-size: 1.8rem;
`;

export const EmptyCart = styled.div`
  text-align: center;
  padding: 3rem;
  
  h3 {
    color: #333;
    margin: 1rem 0;
    font-size: 1.5rem;
  }
  
  p {
    color: #666;
    margin-bottom: 2rem;
  }
`;

export const EmptyMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const CartFooter = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 2px solid #f0f0f0;
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const TotalLabel = styled.span`
  font-size: 1.5rem;
  color: #333;
  font-weight: 600;
`;

export const TotalAmount = styled.span`
  font-size: 2rem;
  color: #764ba2;
  font-weight: bold;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CheckoutButton = styled.button`
  background: #764ba2;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  flex: 1;
  
  &:hover {
    background: #5a3a7e;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const ContinueButton = styled.button`
  background: transparent;
  color: #764ba2;
  border: 2px solid #764ba2;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  flex: 1;
  
  &:hover {
    background: #764ba2;
    color: white;
  }
`;

export const ClearButton = styled.button`
  background: #ff6b6b;
  color: white;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.3s;
  
  &:hover {
    background: #ff5252;
  }
`;