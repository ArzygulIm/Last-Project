import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Home from "../Home/Home";
import Auth from "../../AuthReg/Auth/Auth";
import Reg from "../../AuthReg/Reg/Reg";
import YoutubeMain from "../../Youtube/YoutubeMain/YoutubeMain";
import YoutubeDetails from "../../Youtube/YoutubeDetails/YoutubeDetails";
import MoviesMain from "../../Movies/MoviesMain/MoviesMain";
import MoviesDetails from "../../Movies/MoviesDetails/MoviesDetails";
import GithubMain from "../../Github/GithubMain/GithubMain";
import CocktailsMain from "../../Cocktails/CocktailsMain/CocktailsMain";
import GiphyMain from "../../Giphy/GiphyMain/GiphyMain";
import NewsMain from "../../News/NewsMain/NewsMain";
import PokemonMain from "../../Pokemon/PokemonMain/PokemonMain";
import RandomUserMain from "../../RandomUser/RandomUserMain/RandomUserMain";
import TodoMain from "../../Todo/TodoMain/TodoMain";
import WeatherMain from "../../Weather/WeatherMain/WeatherMain";
import CocktailDetails from "../../Cocktails/CocktailDetails/CocktailDetails";

const PageRoutes = () => {
    return (
        <div>
            <Routes>
                <Route exact path={'/'} element={<Home/>}/>
                <Route exact path={'/sign-in'} element={<Auth/>}/>
                <Route exact path={'/sign-up'} element={<Reg/>}/>
                <Route exact path={'/youtube'} element={<YoutubeMain/>}/>
                <Route exact path={'/youtube/detail/:id'} element={<YoutubeDetails/>}/>
                <Route exact path={'/movies'} element={<MoviesMain/>}/>
                <Route exact path={'/movies/detail/:id'} element={<MoviesDetails/>}/>
                <Route exact path={'/github'} element = {<GithubMain/>}/>
                <Route exact path={'/cocktails'} element = {<CocktailsMain/>}/>
                <Route exact path={'/cocktails/details/:id'} element={<CocktailDetails/>}/>
                <Route exact path={'/giphy'} element = {<GiphyMain/>}/>
                <Route exact path={'/news'} element = {<NewsMain/>}/>
                <Route exact path={'/pokemon'} element = {<PokemonMain/>}/>
                <Route exact path={'/RandomUser'} element = {<RandomUserMain/>}/>
                <Route exact path={'/todo'} element = {<TodoMain/>}/>
                <Route exact path={'/weather'} element = {<WeatherMain/>}/>
            </Routes>
        </div>
    );
};

export default PageRoutes;