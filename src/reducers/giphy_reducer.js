import {LIST_GIF} from "../actions/type";

const initialState = []

const giphy_reducer = (giphy = initialState, action) => {

    const { type, payload } = action
    switch (type) {
        case LIST_GIF:
            return payload
        default:
            return giphy
    }
}

export default giphy_reducer