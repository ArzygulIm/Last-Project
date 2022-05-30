import React from 'react';
import {useSelector} from 'react-redux'
import {Link} from "react-router-dom"

const CocktailsOutput = () => {
    const cocktails = useSelector(state => state.cocktails)
    console.log(cocktails);
    return (
        <div>
            {cocktails && cocktails.map((el, i) => {
                return (
                    <div className={"row"}>
                        <div key={i} className="col-4">
                            <Link to={'/cocktails/details/' + el.idDrink}>
                                <img src={el.strDrinkThumb}/>
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default CocktailsOutput;