import { Link } from "react-router-dom"
import './PostCard.css';


const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <Link to={`/post/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <h3>{post.title}</h3>
      </Link>
      <p>{post.body.slice(0, 100)}...</p>
    </div>
  );
};

export default PostCard;

