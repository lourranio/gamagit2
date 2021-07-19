import React from 'react';
import * as S from './styled';

import cremePreenchedorHidraHialuronico from '../../assets/Creme-Preenchedor-Hidra-Hialuronico.png';
import milagroso from '../../assets/Milagroso-pack.png';


import '../../styles/global.css'



function Ofertas2() {
  return (
    <S.Container>
      <S.Title>Conheca a Linha Completa</S.Title>

      <S.Sale className="sale">
        <S.Item className="item" to="/">
          <img alt="Água Micelar Hialurônico 200ml" src={cremePreenchedorHidraHialuronico} class="center" />
          <h4>Hidra Hialurônico Condicionador Selador</h4>
          <span>REVITALIFT</span>
          <p>R$ 116,99</p>
        </S.Item>

        <S.Item className="item" to="/">
          <img alt="Hidra Hialurônico Creme Preenchedor 250ml" src={milagroso} class="center" />
          <h4>Hidra Hialurônico Creme Preenchedor 250ml</h4>
          <span>ELSEVE‬</span>
          <p>R$ 15,30</p>
        </S.Item>

        <S.Item className="item" to="/">
          <img alt="Água Micelar Hialurônico 200ml" src={cremePreenchedorHidraHialuronico} class="center" />
          <h4>Hidra Hialurônico Condicionador Selador</h4>
          <span>REVITALIFT</span>
          <p>R$ 116,99</p>
        </S.Item>

        <S.Item className="item" to="/">
          <img alt="Água Micelar Hialurônico 200ml" src={cremePreenchedorHidraHialuronico} class="center" />
          <h4>Hidra Hialurônico Condicionador Selador</h4>
          <span>REVITALIFT</span>
          <p>R$ 116,99</p>
        </S.Item>

        <S.Item className="item" to="/">
          <img alt="Água Micelar Hialurônico 200ml" src={cremePreenchedorHidraHialuronico} class="center" />
          <h4>Hidra Hialurônico Condicionador Selador</h4>
          <span>REVITALIFT</span>
          <p>R$ 116,99</p>
        </S.Item>




      </S.Sale>
    </S.Container>
  );
}

export default Ofertas2;