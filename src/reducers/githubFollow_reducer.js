import {GITHUB_GET_FOLLOWINGS, GITHUB_GET_FOLLOWERS} from "../actions/type";

const initialState = []

const follow_details = (githubFollows = initialState, action) => {

    const { type, payload } = action
    switch (type) {
        case GITHUB_GET_FOLLOWINGS:
            return payload
        case GITHUB_GET_FOLLOWERS:
            return payload
        default:
            return githubFollows
    }
}

export default follow_details