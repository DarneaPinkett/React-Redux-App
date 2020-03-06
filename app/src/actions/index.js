import axios from 'axios'

export const FETCHING_CATIMG_START = "FETCHING_CATIMG_START";
export const FETCHING_CATIMG_SUCCESS = "FETCHING_CATIMG_SUCCESS";
export const FETCHING_CATIMG_FAILURE = "FETCHING_CATIMG_FAILURE";

export const getCatImage = () => dispatch => {
    dispatch({type: FETCHING_CATIMG_START});
    axios
    .get(`http://aws.random.cat/meow`)
    .then(resp => {
        dispatch({type: FETCHING_CATIMG_SUCCESS, payload: resp.data.file})
    })
    .catch(err => {
        dispatch({type: FETCHING_CATIMG_FAILURE, payload: err})
    });
};

