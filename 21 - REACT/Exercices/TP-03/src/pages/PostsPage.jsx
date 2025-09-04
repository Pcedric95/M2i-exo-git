import PostCard from '../components/PostCard';

const PostsPage = ({ posts }) => {
  return (
    <div>
      <h2>Liste des articles ({posts.length})</h2>
      {posts.length > 0 ? (
        // Utilise un conteneur en grille
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '60px',
            padding: '20px',
          }}
        >
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p>Chargement des articles...</p>
      )}
    </div>
  );
};

export default PostsPage;
