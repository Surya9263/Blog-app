import Post from "../../components/post/Post"
import Sidebar from "../../components/sidebar/Sidebar"
import SinglePost from "../../components/singlepost/SinglePost"
import "./SinglePostPage.css"

const SinglePostPage = () => {
  return (
    <div className='singlePostPage'>
        <SinglePost/>
        <Sidebar/>
    </div>
  )
}

export default SinglePostPage