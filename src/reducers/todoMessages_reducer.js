import {DELETE_TODO, DONE_TODO, EDIT_TODO} from "../actions/type";

const initialState = {}

const todoMessageReducer = (message = initialState,action)=>{
    const {type,payload} = action
    switch (type){
        case DELETE_TODO:
            return payload
        case EDIT_TODO:
            return payload
        case DONE_TODO:
            return payload
        default:
            return message
    }
}

export default todoMessageReducer