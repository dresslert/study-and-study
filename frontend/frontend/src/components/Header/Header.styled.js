import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  background-color: transparent;
  padding: 20px;
  color: white;
  text-align: center;
  flex-shrink: 0;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const StyledNavLink = styled(Link)`
  color: white;
  margin: 0 15px;
  text-decoration: none;
  padding: 10px 20px;
  border: 2px solid white;
  border-radius: 25px;
  transition: all 0.3s ease;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: white;
    color: black;
    text-decoration: none;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }
`;

export const NavLinkRight = styled(StyledNavLink)`
  margin-left: auto;
  margin-right: 0;
`;
