import React,{useState} from 'react';
import {getAllCocktails,searchCocktails,filterCocktails} from "../../../actions";
import {useDispatch} from 'react-redux'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const CocktailsForm = () => {
    const dispatch = useDispatch()
    const search = (value) => {
        if (value.length > 2) {
            dispatch(searchCocktails(value))
        }
        else {
            dispatch(getAllCocktails())
        }

    }

    const [age, setAge] = useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
        if (age === "All") {
            dispatch(getAllCocktails())
        } else {
            dispatch(filterCocktails(age))
            console.log("filter is work")
        }
    };

    return (
        <div>
            <input
                onChange={e => search(e.target.value)}
                type="text" />

                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={"All"}>All</MenuItem>
                    <MenuItem value={"Alcoholic"}>Alcoholic</MenuItem>
                    <MenuItem value={"Non_Alcoholic"}>Non_Alcoholic</MenuItem>
                </Select>


        </div>
    );
};

export default CocktailsForm;