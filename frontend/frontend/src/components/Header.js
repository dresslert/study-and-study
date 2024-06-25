// src/components/Header.js
import React from 'react';
import styled from 'styled-components';
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

const HeaderWrapper = styled.header`
  background: #000;
  padding: 20px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
`;

const Li = styled.li`
  position: relative;
`;

const A = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color 0.3s;

  &:hover {
    color: #00ff00;
  }

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: -6px;
    left: 0;
    background-color: #00ff00;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out;
  }

  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <Ul>
          <Li>
            <A href="/">
              <FaHome /> Home
            </A>
          </Li>
          <Li>
            <A href="/about">
              <FaInfoCircle /> About
            </A>
          </Li>
          <Li>
            <A href="/contact">
              <FaEnvelope /> Contact
            </A>
          </Li>
        </Ul>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
