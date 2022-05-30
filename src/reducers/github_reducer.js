import {GITHUB_GET_USER} from "../actions/type";

const initialState = {}

const githubReducer = (githubUser = initialState,action)=>{
    const {type,payload} = action
    switch (type){
        case GITHUB_GET_USER:
            return payload
        default:
            return githubUser
    }
}

export default githubReducer