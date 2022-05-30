import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {getMovies} from "../../../actions";

const MoviesForm = () => {
    const [name,setName] = useState('')
    const dispatch = useDispatch()

    const searchMovies = (name)=>{
        dispatch(getMovies(name))}
    return (
        <div style={{margin:"10px 0"}}>
            <input onChange={(e) =>setName(e.target.value)} type="text" placeholder={"Search video"}/>
            <button onClick={()=>searchMovies(name)}>Search</button>
        </div>
    );
};

export default MoviesForm;