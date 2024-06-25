import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #282c34;
  color: white;
  padding: 10px;
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>&copy; 2024 Your Company. All rights reserved.</p>
    </FooterContainer>
  );
}

export default Footer;
