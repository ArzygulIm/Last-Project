import React from 'react';
import {useSelector} from "react-redux";

const RandomUserOutput = () => {
    const data = useSelector(state=>state.user)
    console.log(data)
    return (
        <div>
            {data&&data.map((el,index)=>{
                return(
                    <div key={index}>
                        <img src={el.picture.large} alt=""/>
                    </div>
                )
            })}
        </div>
    );
};

export default RandomUserOutput;