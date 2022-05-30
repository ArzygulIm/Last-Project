import {MOVIES_LIST, MOVIES_LIST_SEARCH} from "../actions/type";

const initialState = []

const moviesReducer = (movies = initialState,action)=>{
    const {type,payload} = action
    switch (type){
        case MOVIES_LIST:
            return payload
        case MOVIES_LIST_SEARCH:
            return payload
        default:
            return movies
    }
}

export default moviesReducer