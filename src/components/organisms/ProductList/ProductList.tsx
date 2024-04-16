import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { fetchProducts } from 'utils/api';
import { ProductCard } from 'components/molecules';

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
}

interface ProductListProps {
  category: string;
}

const ProductList: React.FC<ProductListProps> = ({ category }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts(category, 10);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, [category]);

  return (
    <Grid container spacing={5} justifyContent="center">
      {products.map((product) => (
        <ProductCard category={category} key={product.id} product={product} />
      ))}
    </Grid>
  );
};

export default ProductList;
