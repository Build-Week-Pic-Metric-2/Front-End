import React from 'react'
import {useSelector} from "react-redux"


const Photocard=() =>{
const state = useSelector(state => state);

return(
    state.pic && state.pic.length ? state.pic.map(image => {
        return(
            <div className="image-container">
            <h2>{image.title}</h2>
            <p>{image.description}</p>
            </div>
        )
         } ): null

)

}

export default Photocard;