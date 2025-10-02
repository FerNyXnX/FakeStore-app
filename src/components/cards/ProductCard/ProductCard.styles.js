import styled from 'styled-components';

export const Card = styled.article`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  background: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Info = styled.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  min-height: 2.5rem;
`;

export const Price = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  color: #764ba2;
  margin-bottom: 0.5rem;
`;

export const Category = styled.span`
  font-size: 0.875rem;
  color: #666;
  background: #f0f0f0;
  padding: 0.25rem 0.5rem;
  border-radius: 10px;
  align-self: flex-start;
  margin-bottom: 1rem;
  text-transform: capitalize;
`;

export const AddButton = styled.button`
  background: ${props => props.$inCart ? '#4caf50' : '#764ba2'};
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s;
  margin-top: auto;
  
  &:hover {
    background: ${props => props.$inCart ? '#45a049' : '#5a3a7e'};
  }
`;