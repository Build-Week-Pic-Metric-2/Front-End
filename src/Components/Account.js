import React from 'react'
import {useSelector} from "react-redux";

import PhotoList from "./PhotoList"



const Account = () =>{
    const state = useSelector(state => state);
    

   
    
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