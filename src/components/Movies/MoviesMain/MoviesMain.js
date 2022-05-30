import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getPopularMovies} from "../../../actions";
import MoviesOutput from "../MoviesOutput/MoviesOutput";
import MoviesForm from "../MoviesForm/MoviesForm";
import Header from "../../Main/Header/Header";
import Footer from "../../Main/Footer/Footer";

const MoviesMain = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPopularMovies())
    }, [])
    return (
        <div>
            <Header/>
        <div className={"container"}>

            <MoviesForm/>
            <MoviesOutput/>
        </div>
        </div>
    );
};

export default MoviesMain;