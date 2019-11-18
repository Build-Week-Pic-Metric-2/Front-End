import {FETCH_USERPICS_START, FETCH_USERPICS_SUCCESS, FETCH_USERPICS_FAILURE, POST_USERPICS_START, POST_USERPICS_SUCCESS, POST_USERPICS_FAILURE, DELETE_USERPICS_START, DELETE_USERPICS_SUCCESS, DELETE_USERPICS_FAILURE, EDIT_USERPICS_START, EDIT_USERPICS_SUCCESS, EDIT_USERPICS_FAILURE} from "../actions/actions"

export const initialState = {
    pics: [],
    isLoading: false,
    error: null

}
export const reducer=(state=initialState, actions)=> {
    switch(actions.type){

        
    }
}