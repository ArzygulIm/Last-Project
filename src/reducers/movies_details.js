import {CLEAR_MOVIES_DETAILS, MOVIES_DETAILS} from "../actions/type";

const initialState = {}

const movies_details = (moviesDetails = initialState, action) => {

    const { type, payload } = action
    switch (type) {
        case MOVIES_DETAILS:
            return payload
        case CLEAR_MOVIES_DETAILS:
            return payload
        default:
            return moviesDetails
    }
}

export default movies_details