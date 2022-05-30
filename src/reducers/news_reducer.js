import {NEWS_LIST} from "../actions/type";

const initialState = []

const newsReducer = (news = initialState,action)=>{
    const {type,payload} = action
    switch (type){
        case NEWS_LIST:
            return payload
        default:
            return news
    }
}

export default newsReducer