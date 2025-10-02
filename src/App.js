import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/header/Header';
import ProductList from './components/main/ProductList/ProductList';
import ProductDetail from './components/main/ProductDetail/ProductDetail';
import Cart from './components/cart/Cart';
import Login from './components/forms/Login/Login';
import { MainContainer } from './components/main/Main.styles';
import { useCart } from './hooks/useCart';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { 
    cart, 
    addToCart, 
    removeFromCart, 
    updateQuantity, 
    getTotalPrice, 
    getTotalItems,
    clearCart 
  } = useCart();

  return (
    <Router>
      <GlobalStyles />
      <Header 
        cartItemsCount={getTotalItems()} 
        isAuthenticated={isAuthenticated}
      />
      <MainContainer>
        <Routes>
          <Route 
            path="/" 
            element={
              <ProductList 
                addToCart={addToCart} 
                cart={cart} 
              />
            } 
          />
          <Route 
            path="/product/:id" 
            element={
              <ProductDetail 
                addToCart={addToCart} 
                cart={cart} 
              />
            } 
          />
          <Route 
            path="/cart" 
            element={
              <Cart 
                cart={cart} 
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
                getTotalPrice={getTotalPrice}
                clearCart={clearCart}
              />
            } 
          />
          <Route 
            path="/login" 
            element={
              <Login setIsAuthenticated={setIsAuthenticated} />
            } 
          />
        </Routes>
      </MainContainer>
    </Router>
  );
}

export default App;