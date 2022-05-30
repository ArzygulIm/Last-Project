import React, {useState,useEffect} from 'react';
import {useSelector} from "react-redux";
import {GOOGLE_API as location} from "../../../config";
import sunny from "../../../images/Без названия.jpg"
import rain from "../../../images/5861979b71509.jpg"
import haze from "../../../images/1616593729_47-p-fon-tuman-53.jpg"
import clouds from "../../../images/sky-cloudy-background-clouds.jpeg"
import snow from "../../../images/1603670835_41-p-fon-sneg-65.jpg"

const WeatherOutput = () => {
    const data = useSelector(state=>state.weather)
    const [weather,setWeather] =useState("")
    console.log(data)
    useEffect(() => {
        if (data?.weather) {
            setWeather(data.weather[0].main)
        }
    }, [data])

    return (
        <div style={{display:"flex",justifyContent:"space-around"}}>

            <div className={"col-2"}>

            {data?.name ? <h2>{data?.name}</h2> : <h2>City</h2>}
            {data?.main?.temp ? <h2>{Math.round(+data?.main?.temp - 273.15) + '° C'}</h2> :
                <h2>Temperature</h2>}
            {data?.weather?<h2>{data.weather[0].main}</h2> : <h2>Weather</h2>}


                    <div style={{width:"90%",height:"100px"}}>
                        {weather==='Clouds?'?
                            <img src={clouds} alt=""/>:
                            weather==='Clear'?
                                <img src={sunny} alt=""/>:
                                weather==='Rain'?
                                    <img src={rain} alt=""/>:
                                    weather==='Haze'?
                                        <img src={haze} alt=""/>:
                                        weather==='Snow'?
                                            <img src={snow} alt=""/>:
                                        null}
                    </div>

        </div>
            <div style={{position:"relative",}} className={"col-7"}>
                <iframe style={{width: '100%', height: '70vh', position: 'absolute', top: '0', right: '0'}}
                        src={location + data?.coord?.lat + ',' + data?.coord?.lon}
                        frameBorder="0"></iframe>
            </div>
        </div>
    );
};

export default WeatherOutput;