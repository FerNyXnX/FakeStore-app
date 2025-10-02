import styled from 'styled-components';

export const DetailContainer = styled.div`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 1.5rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9f9f9;
  border-radius: 10px;
  padding: 2rem;
`;

export const ProductImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: contain;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Category = styled.span`
  display: inline-block;
  background: #f0f0f0;
  color: #666;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  text-transform: capitalize;
  align-self: flex-start;
`;

export const Price = styled.p`
  font-size: 2.5rem;
  color: #764ba2;
  font-weight: bold;
`;

export const Description = styled.p`
  color: #666;
  line-height: 1.6;
  font-size: 1rem;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  font-size: 1rem;
`;

export const RatingStar = styled.span`
  color: #ffa500;
  font-size: 1.2rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

export const AddButton = styled.button`
  background: ${props => props.$inCart ? '#4caf50' : '#764ba2'};
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background: ${props => props.$inCart ? '#45a049' : '#5a3a7e'};
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const BackButton = styled.button`
  background: transparent;
  color: #764ba2;
  border: 2px solid #764ba2;
  padding: 1rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background: #764ba2;
    color: white;
  }
`;