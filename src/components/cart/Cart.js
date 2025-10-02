import React from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from '../cards/CartItem/ProductItem.js';
import {
  CartContainer,
  CartHeader,
  CartTitle,
  EmptyCart,
  EmptyMessage,
  CartFooter,
  TotalContainer,
  TotalLabel,
  TotalAmount,
  ButtonGroup,
  CheckoutButton,
  ContinueButton,
  ClearButton
} from './Cart.styles.js';

const Cart = ({ cart, removeFromCart, updateQuantity, getTotalPrice, clearCart }) => {
  const navigate = useNavigate();
  const totalPrice = getTotalPrice();

  if (cart.length === 0) {
    return (
      <CartContainer>
        <CartHeader>
          <CartTitle>Tu Carrito de Compras</CartTitle>
        </CartHeader>
        <EmptyCart>
          <EmptyMessage>
            <span style={{ fontSize: '3rem' }}>🛒</span>
            <h3>Tu carrito está vacío</h3>
            <p>¡Agrega algunos productos para empezar!</p>
          </EmptyMessage>
          <ContinueButton onClick={() => navigate('/')}>
            Ver Productos
          </ContinueButton>
        </EmptyCart>
      </CartContainer>
    );
  }

  return (
    <CartContainer>
      <CartHeader>
        <CartTitle>Tu Carrito de Compras</CartTitle>
        <ClearButton onClick={clearCart}>
          Vaciar Carrito
        </ClearButton>
      </CartHeader>
      
      {cart.map(item => (
        <CartItem
          key={item.id}
          item={item}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
        />
      ))}
      
      <CartFooter>
        <TotalContainer>
          <TotalLabel>Total:</TotalLabel>
          <TotalAmount>${totalPrice.toFixed(2)}</TotalAmount>
        </TotalContainer>
        <ButtonGroup>
          <ContinueButton onClick={() => navigate('/')}>
            ← Seguir Comprando
          </ContinueButton>
          <CheckoutButton>
            Proceder al Pago →
          </CheckoutButton>
        </ButtonGroup>
      </CartFooter>
    </CartContainer>
  );
};

export default Cart;