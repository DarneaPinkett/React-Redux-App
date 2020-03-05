import { FETCHING_DOGIMG_START, FETCHING_DOGIMG_SUCCESS, FETCHING_DOGIMG_FAILURE} from "../actions/index";

const initialState = {
    dogImage: null,
    isFetching: false,
    error: ""
};

export const dogImageReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_DOGIMG_START:
            return {...state, isFetching: true, error: ""};
        case FETCHING_DOGIMG_SUCCESS:
            return {...state, isFetching: false, dogImage:action.payload};
        case FETCHING_DOGIMG_FAILURE:
            return {...state, isFetching: false, dogImage: action.payload};
        default:
            return state;
    }
}