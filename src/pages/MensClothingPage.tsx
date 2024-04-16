/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { CategoryPageTemplate } from 'components/templates';
import Typography from 'components/atoms/Typography/Typography';

const MensClothingPage: React.FC = () => {
  return (
    <div style={{ margin: 40 }}>
      <Typography variant="h6" color="black">
        Men's Clothing
      </Typography>
      <CategoryPageTemplate category="men's clothing" />
    </div>
  );
};

export default MensClothingPage;
