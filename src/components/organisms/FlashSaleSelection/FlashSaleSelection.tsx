import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { ProductCard } from 'components/molecules';
import { fetchProducts } from 'utils/api';
import { colors } from 'theme/colors';
import Typography from 'components/atoms/Typography/Typography';

const FlashSaleSection: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const category = `men's clothing`;
      try {
        const data = await fetchProducts(category, 10);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ margin: 40, overflowX: 'auto' }}>
      <Typography variant="h6" color={colors.black}>
        Flash Sale
      </Typography>
      <Grid container spacing={5} justifyContent="center">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            category={`men's clothing`}
          />
        ))}
      </Grid>
    </div>
  );
};

export default FlashSaleSection;
