import {RANDOM_USER_LIST} from "../actions/type";

const initialState = []

const randomUserReducer = (user = initialState,action)=>{
    const {type,payload} = action
    switch (type){
        case RANDOM_USER_LIST:
            return payload
        default:
            return user
    }
}

export default randomUserReducer