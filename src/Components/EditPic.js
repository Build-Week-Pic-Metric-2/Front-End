import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useSelector, useDispatch} from "react-redux";
import api from "../helpers/api"
import { fetchPics } from '../actions/actions';

const EditPic = (props) => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const [pic, setPic] = useState({
        ...state,
        title:"",
        description: "",
        image:[]
    });

    useEffect(() => {
        api()
        .get(`/api/photos/1/${props.match.params.id}`)
        .then(response => {
            setPic(response.data)
        })
        .catch(error => {
            console.log(error)
        })            
    }, [props.match.params.id])

    const handleChange = event => {
        setPic({
            ...pic,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(fetchPics());        
    }

    return(
        <div className="update-form">
        <div className="edit-pic">
            <h1>Update Pic Info</h1>
            <form onSubmit={handleSubmit}>
                <label> Title: <input type="text" name="title" placehold="Movie Title" value={state.pics.title} onChange={handleChange}/></label>
                <label>Description: <input type="text" name="director" placehold="Movie Director" value={state.pics.description} onChange={handleChange}/></label>
                <img src={state.image} alt={state.pics.description} />
                <button className="update-save" type="submit">Save</button>
               
            </form>
        </div>
        </div>
    )

}

export default EditPic;