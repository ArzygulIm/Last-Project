import {POKEMON_LIST} from "../actions/type";

const initialState = []

const pokemonReducer = (pokemon = initialState,action)=>{
    const {type,payload} = action
    switch (type){
        case POKEMON_LIST:
            return payload
        default:
            return pokemon
    }
}

export default pokemonReducer