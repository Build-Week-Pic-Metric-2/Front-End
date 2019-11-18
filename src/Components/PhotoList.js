import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {fetchPics} from "../actions/actions"



const PhotoList = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPics)
    })       
    return (
        <div className="photoContainer">
            <h3>{state.pic.title}</h3>

        </div>
    )
}
export default PhotoList;