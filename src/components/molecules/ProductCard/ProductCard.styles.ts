import { Card, CardContent, styled } from '@mui/material';
import { Typography } from 'components/atoms';
import { colors } from 'theme/colors';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const StyledCard = styled(Card)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: '12px',
  boxShadow: '10px 15px 20px 0px #00000026',
});

const ProductImage = styled(LazyLoadImage)({
  width: '75%',
  height: 'auto',
  maxHeight: 150,
  objectFit: 'cover',
  padding: '10px',
});

const ProductCardContent = styled(CardContent)(
  ({ category }: { category: string }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor:
      category === "men's clothing"
        ? colors.mensClothing
        : colors.womenClothing,
    borderRadius: '12px 12px 12px 12px',
  }),
);

const StyledTitle = styled(Typography)({
  display: '-webkit-box',
  overflow: 'hidden',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  fontWeight: '700',
  padding: '10px',
});

const StyledDescription = styled(Typography)({
  display: '-webkit-box',
  overflow: 'hidden',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 3,
});

export {
  ProductCardContent,
  ProductImage,
  StyledCard,
  StyledDescription,
  StyledTitle,
};
