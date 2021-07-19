import React from 'react';
import banner from '../../assets/banner.jpg';

import * as S from './styled';

function Banner() {
  return (
    <>


      <S.Info>
        <img alt="banner" src={banner} />

      </S.Info>
    </>
  );
}

export default Banner;