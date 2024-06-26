import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const teleportReintegrate = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const ARContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: #00FFDE;
  text-align: center;
  font-family: 'Roboto Mono', monospace;
  animation: ${teleportReintegrate} 1s forwards;
`;

function RealidadeAumentada() {
  useEffect(() => {
    document.title = 'Realidade Aumentada - Nossa Plataforma';
  }, []);

  return (
    <ARContainer>
      <h1>Realidade Aumentada</h1>
      <p>Experimente a tecnologia de Realidade Aumentada para enriquecer seu aprendizado.</p>
    </ARContainer>
  );
}

export default RealidadeAumentada;
