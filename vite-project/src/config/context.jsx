import React, { Children, createContext, useContext } from 'react';

const PostContext = createContext();

export const usePosts = () => useContext(PostContext);

export const PostProvider = ({ Children }) => {
  return <PostContext.PostProvider>{Children}</PostContext.PostProvider>;
};
