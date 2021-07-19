import React from 'react';
import * as S from './styled';

import hialurônico from '../../assets/Pack_Serum.png';
import milagroso from '../../assets/Milagroso-pack.png';
import antioleosidade from '../../assets/UV-Defender-Antioleosidade.png';
import aguaMicelarHialuronico from '../../assets/Agua-Micelar-Revitalift.png';


import '../../styles/global.css'

function Ofertas() {
  return (
    <S.Container>
      <S.Title>Festival B de Beleza Loreal</S.Title>

      <S.Sale className="sale">
        <S.Item className="item" to="/">
          <img alt="Hialurônico Sérum Preenchedor" src={hialurônico} class="center" />
          <h4>Hialurônico Sérum Preenchedor</h4>
          <span>REVITALIFT</span>
          <p>R$ 116,99</p>
        </S.Item>

        <S.Item className="item" to="/">
          <img alt="Longo dos Sonhos Creme Milagroso 300g" src={milagroso} class="center" />
          <h4>Longo dos Sonhos Creme Milagroso 300g</h4>
          <span>ELSEVE‬</span>
          <p>R$ 15,30</p>
        </S.Item>

        <S.Item className="item" to="/">
          <img alt="UV-Defender-Antioleosidade.png" src={antioleosidade} class="center" />
          <h4>UV-Defender-Antioleosidade.png</h4>
          <span>UV DEFENDER</span>
          <p>R$ 49,90</p>
        </S.Item>

        <S.Item className="item" to="/">
          <img alt="Água Micelar Hialurônico 200ml" src={aguaMicelarHialuronico} class="center" />
          <h4>Água Micelar Hialurônico 200ml</h4>
          <span>REVITALIFT</span>
          <p>R$ 116,99</p>
        </S.Item>

        <S.Item className="item" to="/">
          <img alt="UV-Defender-Antioleosidade.png" src={antioleosidade} class="center" />
          <h4>UV-Defender-Antioleosidade.png</h4>
          <span>UV DEFENDER</span>
          <p>R$ 49,90</p>
        </S.Item>

        <S.Item className="item" to="/">
          <img alt="UV-Defender-Antioleosidade.png" src={antioleosidade} class="center" />
          <h4>UV-Defender-Antioleosidade.png</h4>
          <span>UV DEFENDER</span>
          <p>R$ 49,90</p>
        </S.Item>


      </S.Sale>
    </S.Container>
  );
}



export default Ofertas;