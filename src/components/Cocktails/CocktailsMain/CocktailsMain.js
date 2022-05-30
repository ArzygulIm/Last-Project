import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {getAllCocktails} from "../../../actions";
import CocktailsOutput from "../CocktailsOutput/CocktailsOutput";
import CocktailsForm from "../CocktailsForm/CocktailsForm";
import Header from "../../Main/Header/Header";
import Footer from "../../Main/Footer/Footer";

const CocktailsMain = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCocktails())
    }, [])
    return (
        <div>
            <Header/>
            <CocktailsForm/>
            <CocktailsOutput/>
            <Footer/>
        </div>
    )


};

export default CocktailsMain;