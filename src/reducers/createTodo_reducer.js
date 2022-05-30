import {TO_DO_LIST} from "../actions/type";

const initialState = []

const createTodo_reducer = (createTodos = initialState, action)=>{
    const {type,payload} = action
    switch (type){
        case TO_DO_LIST:
            return payload
        default:
            return createTodos
    }
}

export default createTodo_reducer