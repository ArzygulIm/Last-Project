import {GET_WEATHER} from "../actions/type";

const initialState = []

const weatherReducer = (weather = initialState,action)=>{
    const {type,payload} = action
    switch (type){
        case GET_WEATHER:
            return payload
        default:
            return weather
    }
}

export default weatherReducer