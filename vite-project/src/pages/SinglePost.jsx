import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SinglePost = ({ match }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const postId = match.params.id;
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error('Erro ao carregar o post:', error);
      });
  }, [match.params.id]);

  if (!post) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default SinglePost;
