import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import { colors } from 'theme/colors';
import * as S from './NavBar.styles';
const NavBar: React.FC = () => {
  return (
    <AppBar position="static">
      <Link style={{ textDecoration: 'none' }} to="/">
        <Toolbar>
          <S.StyledTAppTitle color={colors.white} variant="h6">
            Modern Walk
          </S.StyledTAppTitle>
        </Toolbar>
      </Link>
    </AppBar>
  );
};

export default NavBar;
