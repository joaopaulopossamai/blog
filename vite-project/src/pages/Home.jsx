import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 105%;
  height: 100vh;
  margin: 0;
  padding: 0px;
  box-sizing: border-box;
`;

const Header = styled.header`
  background-color: #eaeaea;
  display: flex;
  color: #000;
  padding: 10px 0;
`;

const Nav = styled.nav`
  width: 100vw;
  display: flex;
  justify-content: space-around;
`;

const NavLink = styled(Link)`
  color: #000;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px 0;
`;

const Home = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/posts'>Posts</NavLink>
          <NavLink to='/posts/add'>Adicionar Post</NavLink>
        </Nav>
      </Header>
      <MainContent>
        <h1>Bem-vindo ao Meu Blog</h1>
        <p>Este é um lugar para você compartilhar suas ideias e ler as de outras pessoas.</p>
        <p>Use a barra de navegação acima para explorar o site.</p>
      </MainContent>
      <Footer>
        <p>&copy; 2024 joao paulo possamai </p>
      </Footer>
    </Container>
  );
};

export default Home;
