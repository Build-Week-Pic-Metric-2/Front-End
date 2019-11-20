import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {fetchPics} from "../actions/actions"
import {Link} from "react-router-dom";
import {deletePic} from "../actions/actions"

const PhotoList = (props) => {
    console.log('photolist', props)
    const state = useSelector(state => state);    
    const dispatch = useDispatch();


    useEffect(() => {
        
        dispatch(fetchPics())
       
    }, [dispatch])      

    return (
        state.pics && state.pics.length ? state.pics.map(image => {
            
        return(
            <div className="image-container">
            <h2>{image.title}</h2>
            <p>{image.description}</p>
            <img src={image.urls.small} alt=""/>
        

            <Link to={`/edit-pic/${image.id}`}>Edit Photo</Link>
            
            <button className="delete" onClick={()=>{dispatch(deletePic(image.id))}}>Delete Photo</button>
    </div>
              )}
        ) : null
    )    
}

export default PhotoList;