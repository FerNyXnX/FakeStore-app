import React from 'react';
import { LoadingContainer, Spinner } from './Common.styles.js';

const Loading = () => {
  return (
    <LoadingContainer>
      <Spinner />
      <p>Cargando...</p>
    </LoadingContainer>
  );
};

export default Loading;