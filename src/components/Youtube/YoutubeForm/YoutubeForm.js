import React, {useEffect, useState} from 'react';
import {getVideosByName} from "../../../actions";
import {useDispatch} from "react-redux";

const YoutubeForm = () => {
    const [name,setName] = useState('')
    const dispatch = useDispatch()

    const searchVideo = (name)=>{
        dispatch(getVideosByName(name))
}
    return (
        <div className={"youtube-form"}>
            <input onChange={(e) =>setName(e.target.value)} type="text" placeholder={"Search video"}/>
            <button onClick={()=>searchVideo(name)}>Search</button>
        </div>
    );
};

export default YoutubeForm;