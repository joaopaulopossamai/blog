import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios'; // Importe o axios aqui
import styled from 'styled-components'; // Importe styled-components

// Estilize o Header e Nav
const Header = styled.header`
  background-color: #eaeaea;
  margin-top: 0;
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
const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px 0;
`;

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Enviar os dados do post para a API
    axios
      .post('https://jsonplaceholder.typicode.com/posts', { title, body: description })
      .then((response) => {
        console.log('Post adicionado com sucesso:', response.data);
        // Redirecionar para a página de listagem de posts após adicionar o post
        history.push('/posts');
      })
      .catch((error) => {
        console.error('Erro ao adicionar o post:', error);
      });
  };

  return (
    <>
      <Header>
        <Nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/posts'>Posts</NavLink>
          <NavLink to='/posts/add'>Adicionar Post</NavLink>
        </Nav>
      </Header>
      <div>
        <h1>Adicionar um Post</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='title'>Título:</label>
            <input type='text' id='title' name='title' value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div>
            <label htmlFor='description'>Descrição:</label>
            <textarea id='description' name='description' value={description} onChange={(e) => setDescription(e.target.value)} required />
          </div>
          <button type='submit'>Adicionar</button>
        </form>
      </div>
      <Footer>
        <p>&copy; 2024 joao paulo possamai </p>
      </Footer>
    </>
  );
};

export default AddPost;
