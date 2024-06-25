import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 1.2rem;
`;

function Home() {
  return (
    <HomeContainer>
      <Title>Welcome to Our Website</Title>
      <Text>This is the home page.</Text>
    </HomeContainer>
  );
}

export default Home;
