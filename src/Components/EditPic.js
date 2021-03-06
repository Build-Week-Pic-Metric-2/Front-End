import React, {useEffect, useState} from 'react';

import {useSelector, useDispatch} from "react-redux";
import api from "../helpers/api"
import { editPic } from '../actions/actions';
import collage from "./images/piccollage.jpg"
import unsplash from "../helpers/unsplash"
import Input from '@material-ui/core/Input'

const EditPic = (props) => {
    console.log("EditPic",props)
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const [image, setImage] = useState();
    const [pic, setPic] = useState({        
        ...state.pics
        // title:"",
        // description: "",
        // image:[]
    });

    const id = props.match.params.id;
    useEffect(() => {
        console.log(id)
        unsplash()
        .get(`/photos/${id}`,)
        .then(response => {
            console.log(response.data)
            setPic({
                title: response.data.location.title,
                description: response.data.description
            })
            setImage(response.data.urls.small)

        })
        .catch(error => {
            console.log(error)
        })            
    }, [id, props.match.params.id])

    const handleChange = event => {
        setPic([
            ...state.pics,
            {[event.target.name]: event.target.value}
        ])
    }

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(editPic(pic));        
    }
    console.log("pic",pic.title, pic.description)
    console.log("state", state)
    console.log("images", image)
    
    return(
        <div className="update-form">
             <h1>Update Pic Info</h1>            
          <div className="edit-pic">      
            <form onSubmit={handleSubmit}>
                {pic && pic.length > 0 ? 
                pic.tag.map(pic=>{
                return <label> Title: <Input type="text" name="title" placeholder="Title" value={pic.title} onChange={handleChange}/></label>}):null}
                <label>Description: <Input type="text" name="description" placeholder="Description" value={pic.description} onChange={handleChange}/></label>
                <img src={image} width="400" alt={state.pics.description} /> 
                <button className="update-save" type="submit">Save</button>
            </form>
          </div>
        </div>
    )
}

export default EditPic;