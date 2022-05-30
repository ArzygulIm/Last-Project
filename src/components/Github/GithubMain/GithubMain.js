import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUserByName} from "../../../actions";
import GithubOutput from "../GithubOutput/GithubOutput";
import GithubRepos from "../GithubRepos/GithubRepos";
import Header from "../../Main/Header/Header";
import Footer from "../../Main/Footer/Footer";

const GithubMain = () => {
    const [name,setName] = useState('')
    const dispatch = useDispatch()

    const searchUser = (name)=>{
        dispatch(getUserByName(name))}


    return (
        <div>
            <Header/>
            <input onChange={(e) =>setName(e.target.value)} type="text" placeholder={"Search video"}/>
            <button onClick={()=>searchUser(name)}>Search</button>

            <GithubOutput/>
            <GithubRepos/>

        </div>
    );
};

export default GithubMain;