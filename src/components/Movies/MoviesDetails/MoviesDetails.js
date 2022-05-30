import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {clearMoviesDetails, clearYoutubeDetails, getMoviesDetails} from "../../../actions";

const MoviesDetails = () => {
    const data = useSelector(state=>state.movies)
    const params = useParams()
    const dispatch = useDispatch()
    const details = useSelector(state => state.moviesDetails)

    useEffect(() => {

        dispatch(getMoviesDetails(params.id))
        return ()=>{
            dispatch(clearMoviesDetails())
        }

    }, [])
    console.log(details)

    return (
        <div>
            <img src={details.posterUrl} alt=""/>
            <h2>{details.nameRu}</h2>
            <p>{details.description}</p>
        </div>
    );
};

export default MoviesDetails;