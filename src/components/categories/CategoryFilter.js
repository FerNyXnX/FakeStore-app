import React, { useState, useEffect } from 'react';
import { getCategories } from '../../service/api.js';
import {
  Container,
  Title,
  ButtonGroup,
  CategoryButton
} from './CategoryFilter.styles.js';

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  return (
    <Container>
      <Title>Categorías</Title>
      <ButtonGroup>
        <CategoryButton
          $active={selectedCategory === 'all'}
          onClick={() => onCategoryChange('all')}
        >
          Todos
        </CategoryButton>
        {categories.map(category => (
          <CategoryButton
            key={category}
            $active={selectedCategory === category}
            onClick={() => onCategoryChange(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </CategoryButton>
        ))}
      </ButtonGroup>
    </Container>
  );
};

export default CategoryFilter;