import React,{useEffect} from 'react';
import {useParams} from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux';
import {getCocktailDetails,clearCocktailDetails} from "../../../actions";

const CocktailDetails = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const details = useSelector(state=>state.details)

    useEffect(()=>{

        dispatch(getCocktailDetails(params.id))
        return ()=>{
            dispatch(clearCocktailDetails())
        }
    },[])
    console.log(details)
    return (
        <div>
            <img src={details?.strDrinkThumb} />
            <h5>{details.strDrink}</h5>
        </div>
    );
};

export default CocktailDetails;