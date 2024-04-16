/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { CategoryPageTemplate } from 'components/templates';
import Typography from 'components/atoms/Typography/Typography';

const WomensClothingPage: React.FC = () => {
  return (
    <div style={{ margin: 40 }}>
      <Typography variant="h6" color="black">
        Women's Clothing
      </Typography>
      <CategoryPageTemplate category="women's clothing" />
    </div>
  );
};

export default WomensClothingPage;
