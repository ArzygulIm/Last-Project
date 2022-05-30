import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import YoutubeForm from "../YoutubeForm/YoutubeForm";
import {getVideosByName} from "../../../actions";
import YoutubeOutput from "../YoutubeOutput/YoutubeOutput";
import Header from "../../Main/Header/Header";
import "../style.css"


const YoutubeMain = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getVideosByName('kyrgyzstan'))
    }, [])

    return (
        <section id={"youtube-main"}>
            <Header/>

            <div className="container">
            <YoutubeForm/>
            <YoutubeOutput/>
            </div>
        </section>
    );
};

export default YoutubeMain;