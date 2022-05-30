import {YOUTUBE_LIST} from "../actions/type";

const initialState = []

const youtubeReducer = (videos = initialState,action)=>{
    const {type,payload} = action
    switch (type){
        case YOUTUBE_LIST:
            return payload
        default:
            return videos
    }
}

export default youtubeReducer