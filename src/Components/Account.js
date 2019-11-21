import React, {useState} from 'react'
import {useSelector, useDispatch} from "react-redux";
import ImageUploader from 'react-images-upload';

import PhotoList from "./PhotoList"
import { postPics } from '../actions/actions';


const Account = (props) =>{
  console.log("Account",props)

    const state = useSelector(state => state);
    const [newPhoto, setNewPhoto]=useState({      
      // title: '',
      // description: '',
      title: "",
      url: ""
    });
    const [images, setImages] = useState([])
    const dispatch = useDispatch();    
    const username = sessionStorage.getItem("username")

    const handleChange = (e) => {
      setNewPhoto({...newPhoto,
      [e.target.name]: e.target.value,     
    })
    }

    //  const onDrop = (pic) => {
    //   setImages(
    //       state.pics.concat(pic),
    //   );
    // }

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
        <input type="url" name="photo_url" onChange={handleChange}/>
        {/* <label>Description: <input type="text" placeholder="Description of Photo" name="description" onChange={handleChange}/></label> */}
        {/* <img src={images.name} alt={newPhoto.description}/> */}
        {/* <ImageUploader
        withIcon={true}
        buttonText='Choose images'
        onChange={onDrop}
        imgExtension={['.jpg', '.gif', '.png', '.gif']}
        maxFileSize={5242880}
        />          */}
        <button type="submit" onClick={handleUpload} name="image">Upload Image</button>    
        <PhotoList props={props}/>
        </div>
             
      </div>
    )
}
export default Account;