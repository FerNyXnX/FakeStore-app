import React from 'react';
import { Link } from 'react-router-dom';
import {
  HeaderContainer,
  Nav,
  Logo,
  NavLinks,
  NavLink,
  CartButton,
  CartCount
} from './Header.styles.js';

const Header = ({ cartItemsCount, isAuthenticated }) => {
  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">
          🛍️ FakeStore
        </Logo>
        <NavLinks>
          <NavLink to="/">Productos</NavLink>
          <NavLink to="/login">
            {isAuthenticated ? 'Mi Cuenta' : 'Login'}
          </NavLink>
          <CartButton to="/cart" $hasItems={cartItemsCount > 0}>
            🛒 Carrito
            {cartItemsCount > 0 && <CartCount>{cartItemsCount}</CartCount>}
          </CartButton>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;