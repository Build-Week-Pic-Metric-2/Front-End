import React, {useState} from 'react'
import {useSelector, useDispatch} from "react-redux";
import ImageUploader from 'react-images-upload';

import PhotoList from "./PhotoList"
import { postPics } from '../actions/actions';


const Account = () =>{

    const state = useSelector(state => state);
    const [newPhoto, setNewPhoto]=useState({      
      title: '',
      description: '',
    });
    const [images, setImages] = useState([])
    const dispatch = useDispatch();
    console.log("Account", state)
    const username = sessionStorage.getItem("username")

    const handleChange = (e) => {
      setNewPhoto({...newPhoto,
      [e.target.name]: e.target.value,     
    })
    }

     const onDrop = (pic) => {
      setImages(
          state.pics.concat(pic),
      );
    }

   const handleUpload=()=>{
     dispatch(postPics(newPhoto, images))    
   }

   console.log(newPhoto)
   console.log(images)
    
    return (
      <div className="account-container">
        <div className="add-photo">
        <h2>Welcome {username}</h2>
        <p>Upload a New Image:</p>
        <label>Title: <input type="text" placeholder="Title" name="title" onChange={handleChange}/></label>
        <label>Description: <input type="text" placeholder="Description of Photo" name="description" onChange={handleChange}/></label>
        <ImageUploader
        withIcon={true}
        buttonText='Choose images'
        onChange={onDrop}
        imgExtension={['.jpg', '.gif', '.png', '.gif']}
        maxFileSize={5242880}
        />
        <button type="submit" onClick={handleUpload} name="image">Upload Image</button>    
        </div>
        <PhotoList />      
      </div>
    )
}
export default Account;