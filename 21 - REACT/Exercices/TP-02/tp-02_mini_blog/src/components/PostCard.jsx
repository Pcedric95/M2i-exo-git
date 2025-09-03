


const PostCard = ({post }) => {
    return (
        <div style={{border: '1px solid #ccc', padding: '20px', margin:'15px 0'}}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    )
}

export default PostCard