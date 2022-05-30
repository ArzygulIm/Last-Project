import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {clearYoutubeDetails, getYoutubeDetails} from "../../../actions";
import YoutubeForm from "../YoutubeForm/YoutubeForm";
import Header from "../../Main/Header/Header";

const YoutubeDetails = () => {
    const data = useSelector(state => state.videos)
    const params = useParams()
    const dispatch = useDispatch()
    const details = useSelector(state => state.youtubeDetails)
    useEffect(() => {

        dispatch(getYoutubeDetails(params.id))
        return () => {
            dispatch(clearYoutubeDetails())
        }

    }, [])
    console.log(details)
    console.log(data)
    return (
        <section id={'detail'}>
            <Header/>
            <div className="container">
                <YoutubeForm/>
                <div className="row">

                    <div className={"row"}>
                        <div className={"col-7"}>
                            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${params.id}`}
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                            <h2>{details?.snippet?.title}</h2>
                        </div>


                        <div className={"col-4"}>
                            {data && data.map((el, index) => {
                                return (
                                    <Link key={index} to={'/youtube/detail/' + el.id.videoId}>
                                        <div>
                                            <img src={el.snippet.thumbnails.medium.url} alt=""/>
                                            <h3>{el.snippet.title}</h3>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default YoutubeDetails;