import "./SinglePost.css"

const SinglePost = () => {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i class="singlePostIcon fa-regular fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                    Author: <b>Surya</b>
                </span>
                <span className="singlePostDate">
                    1 hour ago
                </span>
            </div>
            <p className="singlePostDescr">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eligendi voluptate delectus nostrum eveniet. Suscipit, pariatur veritatis vero cupiditate doloribus omnis vitae maiores tempora fugiat asperiores voluptatem accusamus sapiente laborum!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eligendi voluptate delectus nostrum eveniet. Suscipit, pariatur veritatis vero cupiditate doloribus omnis vitae maiores tempora fugiat asperiores voluptatem accusamus sapiente laborum!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eligendi voluptate delectus nostrum eveniet. Suscipit, pariatur veritatis vero cupiditate doloribus omnis vitae maiores tempora fugiat asperiores voluptatem accusamus sapiente laborum!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eligendi voluptate delectus nostrum eveniet. Suscipit, pariatur veritatis vero cupiditate doloribus omnis vitae maiores tempora fugiat asperiores voluptatem accusamus sapiente laborum!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eligendi voluptate delectus nostrum eveniet. Suscipit, pariatur veritatis vero cupiditate doloribus omnis vitae maiores tempora fugiat asperiores voluptatem accusamus sapiente laborum!
            </p>
        </div>        
    </div>
  )
}

export default SinglePost