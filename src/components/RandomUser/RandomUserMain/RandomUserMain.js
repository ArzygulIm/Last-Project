import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getRandomUser} from "../../../actions";
import RandomUserOutput from "../RandomUserOutput/RandomUserOutput";
import Header from "../../Main/Header/Header";
import RandomUserForm from "../RandomUserForm/RandomUserForm";
import Footer from "../../Main/Footer/Footer";

const RandomUserMain = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRandomUser(1))
    },[])
    return (
        <div>
            <Header/>
            <RandomUserForm/>
            <RandomUserOutput/>
            <Footer/>
        </div>
    );
};

export default RandomUserMain;