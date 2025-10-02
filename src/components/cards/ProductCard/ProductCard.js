import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  ImageContainer,
  Image,
  Info,
  Title,
  Price,
  Category,
  AddButton
} from './ProductCard.styles.js';

const ProductCard = ({ product, addToCart, isInCart }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Card onClick={handleCardClick}>
      <ImageContainer>
        <Image src={product.image} alt={product.title} />
      </ImageContainer>
      <Info>
        <Title>{product.title}</Title>
        <Price>${product.price}</Price>
        <Category>{product.category}</Category>
        <AddButton 
          $inCart={isInCart}
          onClick={handleAddToCart}
        >
          {isInCart ? '✓ En el carrito' : 'Agregar al carrito'}
        </AddButton>
      </Info>
    </Card>
  );
};

export default ProductCard;