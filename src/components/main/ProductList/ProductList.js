import React, { useState, useEffect } from 'react';
import { getProducts } from '../../../service/api';
import ProductCard from '../../cards/ProductCard/ProductCard';
import CategoryFilter from '../../categories/CategoryFilter';
import Loading from '../../common/Loading';
import Message from '../../common/Message';
import { ProductGrid } from './ProductList.styles';

const ProductList = ({ addToCart, cart }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [selectedCategory, products]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await getProducts();
      setProducts(response.data);
      setFilteredProducts(response.data);
    } catch (err) {
      setError('Error al cargar los productos');
    } finally {
      setLoading(false);
    }
  };

  const filterProducts = () => {
    if (selectedCategory === 'all') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        product => product.category === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  if (loading) return <Loading />;
  if (error) return <Message type="error">{error}</Message>;

  return (
    <>
      <CategoryFilter 
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <ProductGrid>
        {filteredProducts.map(product => (
          <ProductCard 
            key={product.id}
            product={product}
            addToCart={addToCart}
            isInCart={cart.some(item => item.id === product.id)}
          />
        ))}
      </ProductGrid>
    </>
  );
};

export default ProductList;