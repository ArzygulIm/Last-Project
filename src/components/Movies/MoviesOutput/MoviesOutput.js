import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const MoviesOutput = () => {
    const data = useSelector(state=>state.movies)
    console.log(data)
    return (
        <div>
            {data && data.map((el,index)=>{
                return(
                    <Link key={index} to={'/movies/detail/'+el.filmId}>
                        <div>
                            <img src={el.posterUrl} alt=""/>
                            <h3>{el.nameRu}</h3>
                        </div>
                    </Link>
                )
            })}
        </div>
    );
};

export default MoviesOutput;