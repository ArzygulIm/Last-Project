import {DELETE_TODO, DONE_TODO, EDIT_TODO, TO_DO_LIST} from "../actions/type";

const initialState = []

const todoReducer = (todos = initialState,action)=>{
    const {type,payload} = action
    switch (type){
        case TO_DO_LIST:
            return payload
        default:
            return todos
    }
}

export default todoReducer