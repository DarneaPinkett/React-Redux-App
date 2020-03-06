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
            console.log(action.payload)
            return {...state, isFetching: false, catImage: action.payload};
        case FETCHING_CATIMG_FAILURE:
            return {...state, isFetching: false, catImage: action.payload};
        default:
            return state;
    }
}