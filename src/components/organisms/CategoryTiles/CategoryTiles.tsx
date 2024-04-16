import React from 'react';
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import { colors } from 'theme/colors';
import Typography from 'components/atoms/Typography/Typography';
import * as S from './CategoryTiles.styles';

const CategoryTiles: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', margin: 40 }}>
      <Typography variant="h6" color={colors.black}>
        Categories
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={6} sm={6} md={4} lg={4}>
          <Link to="/mens-clothing" style={{ textDecoration: 'none' }}>
            <S.MensCategory>
              <S.Title variant="h5">Mens Clothing</S.Title>
            </S.MensCategory>
          </Link>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4}>
          <Link to="/womens-clothing" style={{ textDecoration: 'none' }}>
            <S.WomensCategory>
              <S.Title variant="h5">Womens Clothing</S.Title>
            </S.WomensCategory>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default CategoryTiles;
