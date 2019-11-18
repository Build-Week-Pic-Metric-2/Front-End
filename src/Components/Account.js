import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {fetchPics} from "../actions/actions"
import PhotoList from "./PhotoList"



const Account = () =>{
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPics())
    })
    
    return (
        <div className="account-container">
            <h2>Welcome {state.user.name}</h2>

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