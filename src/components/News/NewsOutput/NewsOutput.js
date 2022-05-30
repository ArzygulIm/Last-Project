import React from 'react';
import {useSelector} from "react-redux";
import {Link} from '@mui/material'

const NewsOutput = () => {
    const data = useSelector(state => state.news)
    console.log(data)
    const posts = data.hits
    return (
        <div>
            {posts && posts.map(el => {
                return (
                    <div className={"news-block"}>
                        <Link target="_blank" style={{display: 'block', padding: "5px"}}
                              href={el.url}
                              key={el.objectID}>
                            {/*{el.title===null?el.story_title:el.title===""?el.story_title:el.title}*/}
                            <div className={"author-date"}>
                                <p className={"author"}>{`Created by ${el.author}:`}</p>
                                <p>{`on ${el.created_at.slice(8, 10)}.${el.created_at.slice(5, 7)}.${el.created_at.slice(0, 4)}`}</p>
                            </div>
                            <h6>{el.title || el.story_title || "no title"}</h6>

                            <div className={"tags-wrap"}>
                            {
                                el._tags.map((e, i) => {
                                    return (
                                        <p key={i}>{`#${e}`}</p>
                                    )
                                })
                            }
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    );
};

export default NewsOutput;