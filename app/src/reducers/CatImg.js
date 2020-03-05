import { FETCHING_CATIMG_START, FETCHING_CATIMG_SUCCESS, FETCHING_CATIMG_FAILURE} from "../actions/index";

const initialState = {
    catImage: null,
    isFetching: false,
    error: ""
};

export const catImageReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_CATIMG_START:
            return {...state, isFetching: true, error: ""};
        case FETCHING_CATIMG_SUCCESS:
            return {...state, isFetching: false, dogImage:action.payload};
        case FETCHING_CATIMG_FAILURE:
            return {...state, isFetching: false, dogImage: action.payload};
        default:
            return state;
    }
}