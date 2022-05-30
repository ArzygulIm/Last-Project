import React, {useState} from 'react';
import GithubFollowers from "../GithubFollowers/GithubFollowers";
import {useDispatch, useSelector} from "react-redux";
import {getGithubFollowers, getGithubFollowings} from "../../../actions";

const GithubFollows = () => {
    const data = useSelector(state => state.githubUser)
    const dispatch = useDispatch()
    const [followers, setFollowers] = useState(false)
    const [followings, setFollowings] = useState(false)

    const getFollowers = () => {
        dispatch(getGithubFollowers(data?.login))
        setFollowers(true)
        setFollowings(false)
    }

    const getFollowings = () => {
        dispatch(getGithubFollowings(data?.login))
        setFollowers(false)
        setFollowings(true)
    }

    return (
        <div>
            <div style={{display:data?"block":"none"}}>
                <h3 onClick={getFollowers}>Followers</h3>
                <h3 onClick={getFollowings}>Followings</h3>
            </div>
            <GithubFollowers followers={followers} followings={followings}/>

        </div>
    );
};

export default GithubFollows;