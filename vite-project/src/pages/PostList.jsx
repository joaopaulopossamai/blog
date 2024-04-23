import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const PostList = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
        console.log('Dados dos posts recebidos:', response.data);
      })
      .catch((error) => {
        console.error('Erro ao carregar os posts:', error);
      });
  }, []);

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
        <h1>Lista de Posts</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
      <Footer>
        <p>&copy; 2024 joao paulo possamai </p>
      </Footer>
    </>
  );
};

export default PostList;
