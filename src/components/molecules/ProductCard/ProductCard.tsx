import React from 'react';
import { Grid } from '@mui/material';
import Typography from 'components/atoms/Typography/Typography';
import { colors } from 'theme/colors';
import * as S from './ProductCard.styles';

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    image: string;
    price: number;
    description: string;
  };
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, category }) => {
  return (
    <Grid item xs={12} sm={12} md={4} lg={3}>
      <S.StyledCard>
        <S.StyledTitle variant="body2">{product.title}</S.StyledTitle>
        <S.ProductImage src={product.image} alt={product.title} />
        <S.ProductCardContent category={category}>
          <Typography color={colors.priceText} fontWeight="700" variant="body1">
            Rs {product.price}
          </Typography>
          <S.StyledDescription variant="body2">
            {product.description}
          </S.StyledDescription>
        </S.ProductCardContent>
      </S.StyledCard>
    </Grid>
  );
};

export default ProductCard;
