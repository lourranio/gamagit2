import React from 'react';

import logo from '../../assets/loreal-paris-black-logo.svg';

import * as S from './styled';



function Navbar() {
  return (
    <>
      <S.Navbar>
        <S.LinkHome to="/"><img src={logo} alt="Logo" size={40} color="#FBC02D" /></S.LinkHome>

        <S.Menu className="nav-menu">
          <S.MenuItem>Cuidado com os Cabelos</S.MenuItem>
          <S.MenuItem>Coloração</S.MenuItem>
          <S.MenuItem>Pele</S.MenuItem>
          <S.MenuItem>Beleza</S.MenuItem>
          <S.MenuItem>Skin</S.MenuItem>
          <S.MenuItem>O outro lado</S.MenuItem>
          <S.MenuItem>Testador</S.MenuItem>

        </S.Menu>
      </S.Navbar>
    </>
  );
}

export default Navbar;