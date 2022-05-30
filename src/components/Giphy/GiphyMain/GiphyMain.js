import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {searchGifs} from "../../../actions";
import GiphyOutput from "../GiphyOutput/GiphyOutput";
import Slider from '@mui/material/Slider';
import Header from "../../Main/Header/Header";
import Footer from "../../Main/Footer/Footer";

const GiphyMain = () => {
    const [name,setName] = useState('summer')
    const [count,setCount] = useState(1)
    const dispatch = useDispatch()

    useEffect(()=>{
        const search = (name,count)=>{
            dispatch(searchGifs(name,count))
        }
        search(name,count)
    },[name,count])

    return (
        <div>

            <Header/>
            <input onChange={(e) =>setName(e.target.value)} type="text" placeholder={"Search gifs"}/>
            <Slider
                onChange={e => setCount(+e.target.value)}
                size="small"
                defaultValue={count}
                aria-label="Small"
                valueLabelDisplay="auto"
                min={1}
                max={50}
                step={2}
            />
            {/*<input onChange={(e) =>setCount(e.target.value)} type="text" placeholder={"Search video"}/>*/}
            {/*<button onClick={()=>search(name,count)}>Search</button>*/}
            <GiphyOutput/>
            <Footer/>
        </div>
    );
    return (
        <div>

        </div>
    );
};

export default GiphyMain;