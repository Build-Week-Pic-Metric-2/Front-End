import React, {useState} from 'react'
import {useSelector, useDispatch} from "react-redux";
import ImageUploader from 'react-images-upload';
import { Input } from "@material-ui/core";

import PhotoList from "./PhotoList"
import { postPics } from '../actions/actions';
import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: .5rem 0;
  margin: .5rem 1rem;
  width: 10rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  text-align: center;
  font-size: 1.5rem;
  text-decoration: none;
  :hover{
  background: lightgrey;
  }, 
`;


const Account = (props) =>{
  console.log("Account",props)

    const state = useSelector(state => state);
    const [newPhoto, setNewPhoto]=useState({      
      title: '',
      description: '',
    });
    const [images, setImages] = useState([])
    const dispatch = useDispatch();    
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
            <h2 style={{textAlign: 'center'}}>Welcome {username}</h2>
            <div className='upload-container'>
                <div className='image-desc'>
                    <p>Upload a New Image:</p>
                    <label><Input type="text" placeholder="Title" name="title" onChange={handleChange}/></label>
                    <label><Input type="text" placeholder="Description of Photo" name="description" onChange={handleChange}/></label>
                    <img src={images.name} alt={newPhoto.description}/>
                </div>
                <div className='upload-image'>
                    <ImageUploader
                    withIcon={true}
                    buttonText='Choose images'
                    onChange={onDrop}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}
                    />
                    <Button className='upload-btn' type="submit" onClick={handleUpload} name="image">Upload Image</Button>
                </div>
            </div>
        </div>
        <div className='account-photos'>
          <PhotoList props={props}/>
        </div>
      </div>
    )
}
export default Account;