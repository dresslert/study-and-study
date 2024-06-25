import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  background-color: #282c34;
  padding: 20px;
  color: white;
  text-align: center;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const NavLink = styled(Link)`
  color: white;
  margin: 0 15px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const NavLinkRight = styled(NavLink)`
  margin-left: auto;
  margin-right: 0;
`;
