import {FETCH_USERPICS_START, FETCH_USERPICS_SUCCESS, FETCH_USERPICS_FAILURE, POST_USERPICS_START, POST_USERPICS_SUCCESS, POST_USERPICS_FAILURE, DELETE_USERPICS_START, DELETE_USERPICS_SUCCESS, DELETE_USERPICS_FAILURE, EDIT_USERPICS_START, EDIT_USERPICS_SUCCESS, EDIT_USERPICS_FAILURE} from "../actions/actions"

export const initialState = {
    pics: [],
    isLoading: false,
    error: null,
    isDeleting: false

}
export default function reducer(state=initialState, action){
    switch(action.type){
        case FETCH_USERPICS_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_USERPICS_SUCCESS: 
        return {
            ...state,
            isLoading: false,
            pics: actions.payload
        }
        case FETCH_USERPICS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: actions.payload
            }
        case POST_USERPICS_START:
            return {
                ...state,
                isLoading: true
            }
        case POST_USERPICS_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                pics: [...state.pics, actions.payload]
            }
        case POST_USERPICS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: actions.payload
            }
        case EDIT_USERPICS_START:
            return {
                ...state,
                isLoading: true
            }
        case EDIT_USERPICS_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                pics: actions.payload
            }
        case EDIT_USERPICS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: actions.payload
            }

        case DELETE_USERPICS_START:
            return {
                ...state,
                isDeleting: true
            }
        case DELETE_USERPICS_SUCCESS: 
            return {
                ...state,
                isDeleting: false,
                pics: actions.payload
            }
        case DELETE_USERPICS_FAILURE:
            return {
                ...state,
                isDeleting: false,
                error: actions.payload
            }
        default:
            return state
    
    }
}