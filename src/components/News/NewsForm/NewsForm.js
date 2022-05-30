import React, {useEffect, useState} from 'react';
import {getNews} from "../../../actions";
import {useDispatch, useSelector} from "react-redux";
import {Pagination, TextField} from '@mui/material'
import NewsOutput from "../NewsOutput/NewsOutput";

const NewsForm = () => {
    const [page,setPage] = useState(1)
    const [pageQty,setPageQty] = useState(50)
    const [value,setValue] = useState('react')
    const dispatch = useDispatch()
    const data = useSelector(state=>state.news)
    useEffect(()=>{
        const search = (value,page)=>{
            dispatch(getNews(value,page))
        }
        search(value,page)
        setPageQty(data.nbPages)
        if(data.nbPages<page){
            setPage(1)
        }
    },[value,page])


    return (
        <div className={'container'}>
            <TextField
                style={{margin:"15px",backgroundColor:"white",width:"100%"}}
                id="outlined-basic"
                label="Search news"
                variant="outlined"
                onChange={e=>setValue(e.target.value)}
            />
                <Pagination
                    page={page}
                    count={pageQty}
                    color="primary"
                    showFirstButton
                    showLastButton
                    onChange={(e,num)=>setPage(num)}
                />

            <NewsOutput/>

        </div>
    );
};

export default NewsForm;