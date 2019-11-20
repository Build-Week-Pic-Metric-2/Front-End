import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {deletePic} from "../actions/actions";
import {Link} from "react-router-dom";


const Photocard=() =>{
const state = useSelector(state => state);
const dispatch= useDispatch();

return(    
    <div className="image-container">
        <h2>{state.pics.title}</h2>
        <p>{state.pics.description}</p>
        <img src={state.pics} alt=""/>
       

        <Link to={`/edit-pic/${state.pics.id}`}>Edit Photo</Link>
        
        <button className="delete" onClick={()=>{dispatch(deletePic(state.pics.id))}}>Delete Photo</button>
    </div>
)}

export default Photocard;