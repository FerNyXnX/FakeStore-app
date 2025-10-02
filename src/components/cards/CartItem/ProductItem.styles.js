import styled from 'styled-components';

export const ItemContainer = styled.article`
  display: grid;
  grid-template-columns: 100px 1fr auto auto auto;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  
  @media (max-width: 768px) {
    grid-template-columns: 80px 1fr;
    gap: 0.5rem;
  }
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 100px;
  object-fit: contain;
  background: #f9f9f9;
  padding: 0.5rem;
  border-radius: 8px;
  
  @media (max-width: 768px) {
    height: 80px;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ItemTitle = styled.h4`
  font-size: 1rem;
  color: #333;
  line-height: 1.3;
`;

export const ItemPrice = styled.p`
  color: #764ba2;
  font-weight: bold;
  font-size: 1.1rem;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  @media (max-width: 768px) {
    grid-column: 1;
    justify-self: start;
  }
`;

export const QuantityButton = styled.button`
  background: #764ba2;
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
  
  &:hover {
    background: #5a3a7e;
  }
`;

export const Quantity = styled.span`
  padding: 0 1rem;
  font-weight: 600;
  min-width: 40px;
  text-align: center;
`;

export const ItemTotal = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  
  @media (max-width: 768px) {
    grid-column: 2;
    justify-self: end;
  }
`;

export const RemoveButton = styled.button`
  background: #ff6b6b;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
  
  &:hover {
    background: #ff5252;
  }
  
  @media (max-width: 768px) {
    grid-column: 2;
    justify-self: end;
    margin-top: 0.5rem;
  }
`;