import React, {useEffect} from 'react';
import {getWeather} from "../../../actions";
import {useDispatch} from "react-redux";
import Header from "../../Main/Header/Header";
import WeatherForm from "../WeatherForm/WeatherForm";
import WeatherOutput from "../WeatherOutput/WeatherOutput";

const WeatherMain = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getWeather('Bishkek'))
    },[])
    return (
        <div>
<Header/>
            <WeatherForm/>
            <WeatherOutput/>

        </div>
    );
};

export default WeatherMain;