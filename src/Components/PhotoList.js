import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {fetchPics} from "../actions/actions"
import Photocard from "./Photocard"

const PhotoList = () => {
    const state = useSelector(state => state);    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPics)
    })      

    return (
        state.pic && state.pic.length ? state.pic.map(image => {
            return(
        <Photocard />
              )}
        ) : null
    )    
}

export default PhotoList;