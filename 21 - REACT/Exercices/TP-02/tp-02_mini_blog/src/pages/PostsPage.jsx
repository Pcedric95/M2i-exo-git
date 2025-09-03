import PostCard from '../components/PostCard';

const PostsPage = ({ posts }) => {
  return (
    <div>

      <h2> Liste des articles ({posts.length}) </h2>
      
      {posts.length > 0 ? (
        posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))
      ) : (
        <p>Chargement des articles...</p>
      )}
    </div>
  );
};

export default PostsPage;