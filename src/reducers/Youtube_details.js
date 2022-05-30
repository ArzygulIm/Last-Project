import {CLEAR_YOUTUBE_DETAILS, YOUTUBE_DETAILS} from "../actions/type";

const initialState = {}

const youtube_details = (youtubeDetails = initialState, action) => {

    const { type, payload } = action
    switch (type) {
        case YOUTUBE_DETAILS:
            return payload
        case CLEAR_YOUTUBE_DETAILS:
            return payload
        default:
            return youtubeDetails
    }
}

export default youtube_details