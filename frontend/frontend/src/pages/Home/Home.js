import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import HeroImage from '../../assets/hero-image.jpg';

// Animação de movimento das estrelas
const moveStars = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

// Animação de desintegração durante o teletransporte
const teleportDisintegrate = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
    filter: blur(10px);
  }
`;

// Container Principal
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: #00FFDE;
  text-align: center;
  font-family: 'Roboto Mono', monospace;
  ${({ teleporting }) => teleporting && css`
    animation: ${teleportDisintegrate} 1s forwards;
  `}
`;

// Seção Hero
const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 35vh;
  padding: 60px 20px;
  background-image: url(${HeroImage});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  color: white;

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

// Texto do Hero
const HeroText = styled.h1`
  position: relative;
  font-size: 3em;
  font-weight: bold;
  margin-bottom: 20px;
  text-shadow: 2px 2px 8px rgba(0, 255, 222, 0.7);
  z-index: 2;
`;

// Subtexto do Hero
const HeroSubText = styled.p`
  position: relative;
  font-size: 1.5em;
  margin-bottom: 40px;
  text-shadow: 1px 1px 6px rgba(0, 255, 222, 0.7);
  z-index: 2;
`;

// Botão CTA
const CTAButton = styled.button`
  position: relative;
  padding: 15px 30px;
  background-color: #282c34;
  color: #00FFDE;
  text-decoration: none;
  border-radius: 50px;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 255, 222, 0.3);
  z-index: 2;
  cursor: pointer;

  &:hover {
    background-color: #00FFDE;
    color: #282c34;
    transform: scale(1.05);
  }
`;

// Seção de Características
const FeaturesSection = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 20px 0;
`;

// Cartão de Característica
const FeatureCard = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  padding: 20px;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  width: 250px;
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #00FFDE;
  position: relative;
`;

// Título da Característica
const FeatureTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

// Texto da Característica
const FeatureText = styled.p`
  font-size: 1em;
`;

// Botão de Teleporte
const TeleportButton = styled.button`
  position: relative;
  padding: 15px 30px;
  background-color: #282c34;
  color: #00FFDE;
  text-decoration: none;
  border-radius: 50px;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 255, 222, 0.3);
  z-index: 2;
  cursor: pointer;

  &:hover {
    background-color: #00FFDE;
    color: #282c34;
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 255, 222, 0.6);
  }
`;

// Animação de partículas
const particleEffect = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
`;

const Particle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.8), rgba(0, 255, 222, 0.3));
  border-radius: 50%;
  animation: ${particleEffect} 1s infinite;
  transform: translate(-50%, -50%);
`;

// Elemento de áudio para o som de teletransporte
const teleportSound = new Audio('https://www.mediacollege.com/downloads/sound-effects/star-trek/tos/tos-transporter.mp3');
teleportSound.volume = 0.5;

function Home() {
  const [teleporting, setTeleporting] = useState(false);
  const navigate = useNavigate();

  const handleTeleport = () => {
    setTeleporting(true);
    // Reproduzir o som de teletransporte
    teleportSound.play();
    setTimeout(() => {
      navigate('/realidade-aumentada');
    }, 3000); // Multiplicar por 1000 para obter milissegundos
  };

  return (
    <HomeContainer teleporting={teleporting ? 1 : 0}>
      <HeroSection>
        <HeroText>Bem-vindo à Nossa Plataforma Inovadora de Aprendizado</HeroText>
        <HeroSubText>Experimente uma nova forma de aprender, sem professores.</HeroSubText>
        <CTAButton onClick={() => navigate('/explore')}>Explore Agora</CTAButton>
      </HeroSection>
      <FeaturesSection>
        <FeatureCard>
          <FeatureTitle>Realidade Aumentada</FeatureTitle>
          <FeatureText>Interaja com conteúdo AR para melhorar sua experiência de aprendizado.</FeatureText>
          <TeleportButton onClick={handleTeleport}>Ir para AR</TeleportButton>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Inteligência Artificial</FeatureTitle>
          <FeatureText>Use IA para personalizar seu caminho de aprendizado e progresso.</FeatureText>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Gamificação</FeatureTitle>
          <FeatureText>Aprenda de forma divertida através de jogos e desafios envolventes.</FeatureText>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Microlearning</FeatureTitle>
          <FeatureText>Aprenda em pequenos pedaços para maximizar a retenção e o entendimento.</FeatureText>
        </FeatureCard>
      </FeaturesSection>
      {teleporting && (
        <Particle />
      )}
    </HomeContainer>
  );
}

export default Home;
