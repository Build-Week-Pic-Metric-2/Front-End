import api from "../helpers/api"

export const FETCH_USERPICS_START = "FETCH_USERPICS_START";
export const FETCH_USERPICS_SUCCESS = "FETCH_USERPICS_SUCCESS";
export const FETCH_USERPICS_FAILURE = "FETCH_USERPICS_FAILURE";
export const POST_USERPICS_START = "POST_USERPICS_START";
export const POST_USERPICS_SUCCESS = "POST_USERPICS_SUCCESS";
export const POST_USERPICS_FAILURE = "POST_USERPICS_FAILURE";
export const DELETE_USERPICS_START = "DELETE_USERPICS_START";
export const DELETE_USERPICS_SUCCESS = "DELETE_USERPICS_SUCCESS";
export const DELETE_USERPICS_FAILURE = "DELETE_USERPICS_FAILURE";
export const EDIT_USERPICS_START = "EDIT_USERPICS_START";
export const EDIT_USERPICS_SUCCESS = "EDIT_USERPICS_SUCCESS";
export const EDIT_USERPICS_FAILURE = "EDIT_USERPICS_FAILURE";


export const fetchPics=() =>{
    return dispatch => {
        dispatch({type: FETCH_USERPICS_START});
        api()
        .get("/api/photos/1")
        .then(response => {
            dispatch({type: FETCH_USERPICS_SUCCESS, payload: response.data});
        })
        .catch(error => {
            dispatch({tupe: FETCH_USERPICS_FAILURE, payload: error});
        });
    };
}

export const postPics = ({title, description, image}) => {
    return dispatch => {
        dispatch({type: POST_USERPICS_START});
        api()
        .post("/api/photos/1", {
            title: title,
            description: description,
            image: image
        })
        .then(response => {
            dispatch({type: POST_USERPICS_SUCCESS, payload: response.data});
                api()
                .get("/api/photos/1")
                .then(response => {
                    dispatch({type: FETCH_USERPICS_SUCCESS, payload: response.data});
                 })
                .catch(error => {
                    dispatch({tupe: FETCH_USERPICS_FAILURE, payload: error});
                    });
        })
        .catch(error => {
            dispatch({type: POST_USERPICS_FAILURE, payload: error});
        });
    };

}

export const editPics = (id, data) => {
    return dispatch => {
        dispatch({type: EDIT_USERPICS_START});
        api()
        .put("/api/photos/1", data)
        .then(response => {
            dispatch({type: EDIT_USERPICS_SUCCESS, payload: response.data});
            dispatch(fetchPics());
        })
        .catch(error => {
            dispatch({tupe: EDIT_USERPICS_FAILURE, payload: error});
        });
    };

}

export const deletePics = (id) => {
    return dispatch => {
        dispatch({type: DELETE_USERPICS_START});
        api()
        .delete("/api/photos/1")
        .then(response => {
            dispatch({type: DELETE_USERPICS_SUCCESS, payload: response.data});
            dispatch(fetchPics());
        })
        .catch(error => {
            dispatch({tupe: DELETE_USERPICS_FAILURE, payload: error});
        });
    };

}

