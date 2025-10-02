import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProduct } from '../../../service/api.js';
import Loading from '../../common/Loading.js';
import Message from '../../common/Message.js';
import {
  DetailContainer,
  ImageContainer,
  ProductImage,
  InfoContainer,
  Title,
  Category,
  Price,
  Description,
  Rating,
  RatingStar,
  ButtonGroup,
  AddButton,
  BackButton
} from './ProductDetail.styles';

const ProductDetail = ({ addToCart, cart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await getProduct(id);
      setProduct(response.data);
    } catch (err) {
      setError('Error al cargar el producto');
    } finally {
      setLoading(false);
    }
  };

  const isInCart = cart.some(item => item.id === parseInt(id));

  if (loading) return <Loading />;
  if (error) return <Message type="error">{error}</Message>;
  if (!product) return <Message>Producto no encontrado</Message>;

  return (
    <DetailContainer>
      <ImageContainer>
        <ProductImage src={product.image} alt={product.title} />
      </ImageContainer>
      <InfoContainer>
        <Category>{product.category}</Category>
        <Title>{product.title}</Title>
        <Rating>
          <RatingStar>⭐</RatingStar>
          <span>{product.rating.rate} ({product.rating.count} reseñas)</span>
        </Rating>
        <Price>${product.price}</Price>
        <Description>{product.description}</Description>
        <ButtonGroup>
          <AddButton 
            $inCart={isInCart}
            onClick={() => addToCart(product)}
          >
            {isInCart ? '✓ En el carrito' : 'Agregar al carrito'}
          </AddButton>
          <BackButton onClick={() => navigate('/')}>
            ← Volver a productos
          </BackButton>
        </ButtonGroup>
      </InfoContainer>
    </DetailContainer>
  );
};

export default ProductDetail;