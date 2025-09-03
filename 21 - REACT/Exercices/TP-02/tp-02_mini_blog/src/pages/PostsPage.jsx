import React from 'react';

const PostsPage = ({ posts }) => {
  return (
    <div>
      {posts.length > 0 ? (
        <p>Il y a {posts.length} articles disponibles.</p>
      ) : (
        <p>Chargement des articles...</p>
      )}
    </div>
  );
};

export default PostsPage;