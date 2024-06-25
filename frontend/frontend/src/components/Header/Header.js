import React from 'react';
import {
  HeaderContainer,
  Navbar,
  NavLink,
  NavLinkRight,
} from './Header.styled';

function Header() {
  return (
    <HeaderContainer>
      <Navbar>
        <NavLink to="/">Home</NavLink>
        <NavLinkRight to="/login">Login</NavLinkRight>
      </Navbar>
    </HeaderContainer>
  );
}

export default Header;
