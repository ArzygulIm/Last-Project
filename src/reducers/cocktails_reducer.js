import {LIST_COCKTAILS,LIST_SEARCH_COCKTAILS,FILTER_COCKTAILS} from "../actions/type";

const initialState = []

const cocktails_reducer = (cocktails = initialState, action) => {

    const { type, payload } = action
    switch (type) {
        case LIST_COCKTAILS:
            return payload
        case LIST_SEARCH_COCKTAILS:
            return payload
        case FILTER_COCKTAILS:
            return payload
        default:
            return cocktails
    }
}

export default cocktails_reducer