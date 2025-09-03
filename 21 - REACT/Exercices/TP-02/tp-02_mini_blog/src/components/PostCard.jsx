import { Link } from "react-router-dom"



const PostCard = ({post }) => {
    return (
        <div style={{border: '1px solid #ccc', padding: '20px', margin:'15px 0'}}>
            <Link to={`/post/${post.id}`}>
        <h3>{post.title}</h3>
      </Link>
      <p>{post.body}</p>
    </div>
    )
}

export default PostCard;