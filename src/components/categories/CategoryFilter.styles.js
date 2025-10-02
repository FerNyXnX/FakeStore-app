import styled from 'styled-components';

export const Container = styled.section`
  margin-bottom: 2rem;
`;

export const Title = styled.h2`
  color: white;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const CategoryButton = styled.button`
  background: ${props => props.$active ? '#764ba2' : 'white'};
  color: ${props => props.$active ? 'white' : '#333'};
  border: 2px solid #764ba2;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s;
  text-transform: capitalize;
  
  &:hover {
    background: #764ba2;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(118, 75, 162, 0.3);
  }
`;