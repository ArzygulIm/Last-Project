import React from 'react';
import {useSelector} from "react-redux";

const GiphyOutput = () => {
    const data = useSelector(state=>state.giphy)
    console.log(data)
    return (
        <div style={{display:"flex",flexWrap:"wrap"}}>
            {data&&data.map(el=>{
                return (
                    <div key={el.id}>
                        <iframe src={el.embed_url} frameBorder="0"></iframe>
                    </div>
                )
            })}
        </div>
    );
};

export default GiphyOutput;