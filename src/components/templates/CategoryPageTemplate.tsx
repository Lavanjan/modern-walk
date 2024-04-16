import React from 'react';
import { ProductList } from 'components/organisms';

interface CategoryPageTemplateProps {
  category: string;
}

const CategoryPageTemplate: React.FC<CategoryPageTemplateProps> = ({
  category,
}) => {
  return (
    <div>
      <ProductList category={category} />
    </div>
  );
};

export default CategoryPageTemplate;
