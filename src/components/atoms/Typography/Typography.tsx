import React from 'react';
import { Typography as MuiTypography, TypographyProps } from '@mui/material';
import { typography } from 'theme/typography';

interface CustomTypographyProps extends TypographyProps {
  children: React.ReactNode;
}

const Typography: React.FC<CustomTypographyProps> = ({
  children,
  ...props
}) => {
  return (
    <MuiTypography sx={{ fontFamily: typography.fontFamily }} {...props}>
      {children}
    </MuiTypography>
  );
};

export default Typography;
