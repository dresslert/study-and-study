import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login'; 
import RealidadeAumentada from './pages/AR/RealidadeAumentada';
import styled, { keyframes } from 'styled-components';

// Animação das estrelas
const moveStars = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

// Animação do cometa
const cometAnimation = keyframes`
  0% {
    transform: translate(0, 0);
    opacity: 1;
  }
  100% {
    transform: translate(800px, 400px);
    opacity: 0;
  }
`;

const AppContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #000; /* Fundo preto */
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    background: url('https://www.transparenttextures.com/patterns/stardust.png');
    animation: ${moveStars} 50s linear infinite;
    z-index: 1;
  }
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: white;
  z-index: 2; /* Para garantir que o conteúdo fique acima das estrelas */
`;

const Comet = styled.div`
  position: absolute;
  top: -50px;
  left: -50px;
  width: 10px;
  height: 10px;
  background: linear-gradient(45deg, white, rgba(255, 255, 255, 0));
  border-radius: 50%;
  box-shadow: 0 0 20px white, 0 0 50px white;
  animation: ${cometAnimation} 2s linear infinite;
  z-index: 3;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/realidade-aumentada" element={<RealidadeAumentada />} />
          </Routes>
        </MainContent>
        <Footer />
        <Comet />
      </AppContainer>
    </Router>
  );
}

export default App;
