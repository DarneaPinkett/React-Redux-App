import axios from 'axios'

export const FETCHING_DOGIMG_START = "FETCHING_DOGIMG_START";
export const FETCHING_DOGIMG_SUCCESS = "FETCHING_DOGIMG_SUCCESS";
export const FETCHING_DOGIMG_FAILURE = "FETCHING_DOGIMG_FAILURE";

export const getDogImage = () => dispatch => {
    dispatch({type: FETCHING_DOGIMG_START});
    axios
    .get(`https://random.dog/00564ba3-e5cb-4b2b-8d97-c65a9ef26c23.png`)
    .then(resp => {
        dispatch({type: FETCHING_DOGIMG_SUCCESS, payload: resp.data.file})
    })
    .catch(err => {
        dispatch({type: FETCHING_DOGIMG_FAILURE, payload: err})
    });
};

