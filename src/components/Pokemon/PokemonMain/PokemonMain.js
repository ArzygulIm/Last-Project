import React, {useEffect} from 'react';
import Header from "../../Main/Header/Header";
import Footer from "../../Main/Footer/Footer";
import {useDispatch, useSelector} from "react-redux";
import {getAllPokemons} from "../../../actions";
import {POKEMON_API} from "../../../config";

const PokemonMain = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllPokemons(POKEMON_API))
    }, [])

    const data = useSelector(state=>state.pokemon)
    console.log(data)

    return (
        <div>
            <Header/>


            <Footer/>
        </div>
    );
};

export default PokemonMain;