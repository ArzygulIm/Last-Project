import {GITHUB_GET_REPOS} from "../actions/type";

const initialState = []

const repos_details = (githubRepos = initialState, action) => {

    const { type, payload } = action
    switch (type) {
        case GITHUB_GET_REPOS:
            return payload
        default:
            return githubRepos
    }
}

export default repos_details