import styled from 'styled-components';

export const MainContainer = styled.main`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
  min-height: calc(100vh - 100px);

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;