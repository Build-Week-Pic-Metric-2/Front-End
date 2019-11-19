import React, {useState} from 'react'
import {useSelector, useDispatch} from "react-redux";



import PhotoList from "./PhotoList"
import { postPics } from '../actions/actions';



const Account = () =>{
    const state = useSelector(state => state);
    const [newPhoto, setNewPhoto]=useState({
      title:"",
      description: ""
    });
    const dispatch = useDispatch();
    console.log("Account", state)
    const username = sessionStorage.getItem("username")

    const handleChange = (e) => {
      setNewPhoto({...newPhoto,
      [e.target.name]: e.target.value
    })
    }

   const handleUpload=()=>{
     dispatch(postPics(state.pics))    
   }

   console.log(newPhoto)
    
    return (
        <div className="account-container">
            <h2>Welcome {username}</h2>
             <p>Upload a New Image:</p>
              <label>Title: <input type="text" placeholder="Title" name="title" onChange={handleChange}/></label>
              <label>Description: <input type="text" placeholder="Description of Photo" name="description" onChange={handleChange}/></label>
              <label>Image: <input type='file' id='single' onClick={handleUpload}/></label>
            

            {state.error && <p>Error: {state.error}</p>}
        {state.isLoading ? 
        (
          <div>...Loading</div>
        ) : (
          <div>
         <PhotoList />
          </div>
        )}

            {state.error && <p>Error: {state.error}</p>}
        {state.isLoading ? 
        (
          <div>...Loading</div>
        ) : (
          <div>
         <PhotoList />
          </div>
        )}

        </div>

    )
}
export default Account;