import React, {useState} from 'react'
import axios from 'axios';
import userIcon from '../assets/userIcon.webp';
import '../css/Post.css';

const Post = () => {
    const [userName, setUserName] = useState("");
    const [caption, setCaption] = useState("");
    const [image, setImage] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
        // console.log(first)
        axios.post('http://localhost:8000/social-post',{userName:userName,caption:caption, image:image}).then(result => console.log(result)).catch(err => console.log(err))
    };
    // console.log(image);
  return (
    <>
        <div className="post">
            <form onSubmit={handleSubmit}>
                <h1>Create Post</h1>
                <img src={image || userIcon} alt="post-img" /><br />
                <input type='file' accept='.jpg, .png, .jpeg' required onChange={(e)=>{setImage(URL.createObjectURL(e.target.files[0]))}}/>
                <label htmlFor="userName">
                    <h3>User Name : </h3>
                    <input type="text" placeholder='user name' required onChange={(e)=>{setUserName(e.target.value)}}/>
                </label>
                <label htmlFor="caption">
                    <h3>Caption : </h3>
                    <input type="text" placeholder='caption' required onChange={(e)=>{setCaption(e.target.value)}}/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    </>
  )
}

export default Post;