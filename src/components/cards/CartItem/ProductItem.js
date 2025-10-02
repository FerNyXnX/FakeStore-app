import React from 'react';
import {
  ItemContainer,
  ItemImage,
  ItemInfo,
  ItemTitle,
  ItemPrice,
  QuantityControl,
  QuantityButton,
  Quantity,
  RemoveButton,
  ItemTotal
} from './ProductItem.styles.js';

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  const handleDecrease = () => {
    updateQuantity(item.id, item.quantity - 1);
  };

  const handleIncrease = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  const itemTotal = (item.price * item.quantity).toFixed(2);

  return (
    <ItemContainer>
      <ItemImage src={item.image} alt={item.title} />
      <ItemInfo>
        <ItemTitle>{item.title}</ItemTitle>
        <ItemPrice>${item.price}</ItemPrice>
      </ItemInfo>
      <QuantityControl>
        <QuantityButton onClick={handleDecrease}>-</QuantityButton>
        <Quantity>{item.quantity}</Quantity>
        <QuantityButton onClick={handleIncrease}>+</QuantityButton>
      </QuantityControl>
      <ItemTotal>${itemTotal}</ItemTotal>
      <RemoveButton onClick={handleRemove}>
        Eliminar
      </RemoveButton>
    </ItemContainer>
  );
};

export default CartItem;