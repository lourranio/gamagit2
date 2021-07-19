import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import Ofertas from '../../components/Ofertas';
import Ofertas2 from '../../components/Ofertas2';
import Footer from '../../components/Footer';


import * as S from './styled';

function Home() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  function handleForm(res) {
    res.preventDefault();
    let data = {
      nome: userName,
      email: userEmail
    }

    localStorage.setItem('users', JSON.stringify(data));
    setUserName('');
    setUserEmail('');
    alert(`${userName} , cruze os dedos e Boa sorte nas promoções. =D `);
  }

  return (
    <>
      <Navbar />
      <Banner />
      <Ofertas />
      <S.Newsletter>
        <S.Title>
          <h2>A BLACK FRIDAY HIRING CODERS</h2>
          <h3>Ofertas pra todos os DEVS. =D </h3>
        </S.Title>

        <S.Register>
          <h3>Cadastre-se aqui</h3>
          <form onSubmit={handleForm} className="form">
            <input type="text" name="name" id="name" value={userName} placeholder="Qual seu nome ?" required onChange={(res) => setUserName(res.target.value)} />
            <input type="email" name="email" id="email" value={userEmail} placeholder="Qual seu email ?" required onChange={(res) => setUserEmail(res.target.value)} />
            <button type="submit">Quero me cadastrar</button>
          </form>

        </S.Register>
      </S.Newsletter>

      <Ofertas2 />

      <Footer />
    </>
  );
}

export default Home;