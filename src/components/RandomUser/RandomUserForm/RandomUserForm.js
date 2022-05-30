import React, {useEffect, useState} from 'react';
import Slider from '@mui/material/Slider';
import {getRandomUser} from "../../../actions";
import {useDispatch} from "react-redux";

const RandomUserForm = () => {
    const [value,setValue]=useState(1)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getRandomUser(value))
    },[value])
    return (
        <div>
            <Slider
                onChange={e => setValue(+e.target.value)}
                size="small"
                defaultValue={value}
                aria-label="Small"
                valueLabelDisplay="auto"
                min={1}
                max={20}
                step={1}
            />
            <input style={{width:"300px"}} type="number" placeholder={"Введите количество юзеров"} onChange={e => setValue(+e.target.value)}/>
        </div>
    );
};

export default RandomUserForm;