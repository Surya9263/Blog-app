import "./Post.css"

const Post = () => {
  return (
    <div className="post">
        <img src="https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg" alt="" className="postImg" />
        <div className="postInfo">
            <div className="postCategories">
                <span className="postCategory">Music</span>
                <span className="postCategory">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit amet</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDescr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio recusandae nostrum sunt praesentium quam temporibus nisi repellendus non corrupti corporis dolorem explicabo voluptates, nemo harum id, enim quisquam fugit? Minus!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio recusandae nostrum sunt praesentium quam temporibus nisi repellendus non corrupti corporis dolorem explicabo voluptates, nemo harum id, enim quisquam fugit? Minus!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio recusandae nostrum sunt praesentium quam temporibus nisi repellendus non corrupti corporis dolorem explicabo voluptates, nemo harum id, enim quisquam fugit? Minus!</p>
    </div>
  )
}

export default Post