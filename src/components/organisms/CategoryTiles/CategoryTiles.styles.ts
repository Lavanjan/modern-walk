import { Box, styled } from '@mui/material';
import { Typography } from 'components/atoms';
import { colors } from 'theme/colors';

const CategoryBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '150px',
  width: '100%',
  marginBottom: '20px',
  borderRadius: '10px',
  boxShadow: '10px 15px 20px 0px #00000026',
  cursor: 'pointer',
});

const MensCategory = styled(CategoryBox)({
  backgroundColor: colors.mensClothing,
});

const WomensCategory = styled(CategoryBox)({
  backgroundColor: colors.womenClothing,
});

const Title = styled(Typography)({
  color: 'white',
  lineHeight: '20px',
  fontWeight: 700,
  fontFamily: 'Roboto',
});

export { CategoryBox, MensCategory, WomensCategory, Title };
