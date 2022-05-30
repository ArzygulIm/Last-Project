import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const YoutubeOutput = () => {
    const data = useSelector(state=>state.videos)
    console.log(data)
    return (
        <div>
            {data && data.map((el,index)=>{
                return(
                    <Link key={index} to={'/youtube/detail/'+el.id.videoId}>
                        <div>
                            <img src={el.snippet.thumbnails.medium.url} alt=""/>
                            <h3>{el.snippet.title}</h3>
                        </div>
                    </Link>
                )
            })}
        </div>
    );
};

export default YoutubeOutput;