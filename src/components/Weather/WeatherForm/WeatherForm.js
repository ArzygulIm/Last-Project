import React,{useState,useEffect} from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useDispatch} from "react-redux";
import {getWeather} from "../../../actions";

const WeatherForm = () => {
    const [name,setName] = useState('')
    const dispatch = useDispatch()
    const getWeatherForm = (city)=>{
            dispatch(getWeather(city))
    }
    return (
        <div>
            <div style = {{display:'flex'}}>
                <TextField valuse = {name}
                           onChange={(e)=>setName(e.target.value)}
                           id="outlined-basic" label="City" variant="outlined" />
                <Button style={{background:'purple'}} onClick={()=>getWeatherForm(name)} variant="contained">Search</Button>
            </div>
        </div>
    );
};

export default WeatherForm;