import {CLEAR_COCKTAIL_DETAILS, LIST_COCKTAIL_DETAILS} from "../actions/type";

const initialState = {}

const cocktailDetails_reducer = (cocktailDetails = initialState, action) => {

    const { type, payload } = action
    switch (type) {
        case LIST_COCKTAIL_DETAILS:
            return payload
        case CLEAR_COCKTAIL_DETAILS:
            return payload
        default:
            return cocktailDetails
    }
}

export default cocktailDetails_reducer