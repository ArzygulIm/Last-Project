import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getNews} from "../../../actions";
import Header from "../../Main/Header/Header";
import NewsForm from "../NewsForm/NewsForm";
import "../style.css"

const NewsMain = () => {

    return (
        <section id={"news"}>
            <Header/>
            <NewsForm/>
        </section>
    );
};

export default NewsMain;