import React from 'react';
import {useSelector} from "react-redux";

const GithubFollowers = (props) => {

    const data = useSelector(state => state.githubFollows)
    console.log(data)

    return (
        <div>
            {props.followers ? <h3>Followers</h3> : props.followings ? <h3>Followings</h3> : null}
            {data && data.map((el, index) => {
                return (
                    <div key={index}>
                        <p>{el.login}</p>

                    </div>
                )
            })}
        </div>
    );
};

export default GithubFollowers;