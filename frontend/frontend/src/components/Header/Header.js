import React from 'react';

import {
  HeaderContainer,
  Navbar,
  StyledNavLink,
  NavLinkRight,
} from './Header.styled';

function Header() {
  return (
    <HeaderContainer>
      <Navbar>
        <StyledNavLink to="/">Home</StyledNavLink>
        <NavLinkRight to="/login">Login</NavLinkRight>
      </Navbar>
    </HeaderContainer>
  );
}

export default Header;
