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
        <Photocard />
    )
}
export default PhotoList;