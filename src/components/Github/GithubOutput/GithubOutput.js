import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import GithubFollows from "../GithubFollows/GithubFollows";

const GithubOutput = () => {

    const data = useSelector(state=>state.githubUser)

    return (
        <div>

            <img src={data.avatar_url} alt=""/>
            <p>{data.login}</p>

            <GithubFollows/>
        </div>
    );
};

export default GithubOutput;