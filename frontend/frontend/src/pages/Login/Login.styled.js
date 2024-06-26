import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 0;
`;

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  background-image: url('path_to_your_background_image.jpg'); /* Imagem de fundo */
  background-size: cover;
  background-position: center;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.85); /* Fundo escuro e semi-transparente */
  padding: 60px; /* Aumenta o padding interno */
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 450px; /* Ajuste a largura máxima conforme necessário */
  z-index: 1;
  animation: ${fadeIn} 1s ease-in-out;
  color: #00FFDE; /* Cor do texto */
`;

export const LoginTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 36px;
  color: #00FFDE; /* Cor inspirada em interfaces de Star Trek */
  text-align: center;
  font-family: 'Roboto Mono', monospace; /* Fonte de estilo futurístico */
`;

export const LoginInput = styled.input`
  margin-bottom: 20px;
  padding: 15px;
  font-size: 18px;
  border: 1px solid #00FFDE; /* Borda com a cor inspirada em Star Trek */
  border-radius: 4px;
  background-color: transparent; /* Fundo transparente */
  color: #00FFDE; /* Cor do texto */
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const LoginButton = styled.button`
  padding: 15px;
  font-size: 18px;
  color: #282c34; /* Cor do texto */
  background-color: #00FFDE; /* Cor de fundo */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    background-color: #007bff;
    transform: translateY(-2px);
  }
`;

export const LoginError = styled.div`
  color: #ff0000;
  margin-bottom: 20px;
  text-align: center;
  background-color: #ffe5e5;
  padding: 10px;
  border-radius: 4px;
`;
