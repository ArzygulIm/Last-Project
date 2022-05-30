import React, {useState, useContext, useEffect} from 'react';
import {UserContext} from "../../../UserContext";
import {Link} from "react-router-dom";
import AOS from "aos"
import "aos/dist/aos.css"

const AuthForm = () => {
    useEffect(()=>{
        AOS.init({
            offset:100,
            duration:1000,
            easing:'ease',
            //disable:'mobile',
            once: false,
        })
    })

    const {auth} = useContext(UserContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div data-aos={"fade-left"} className="form left">

            <input className={"email-input"} onChange={e => {
                setEmail(e.target.value)
            }} type="text" placeholder="email"/>

            <input className={"password-input"} onChange={e => {
                setPassword(e.target.value)
            }} type="text" placeholder="password"/>

            <div className="btn-wrap">
                <button onClick={() => auth(email, password)}>Sign in</button>
                <button><Link to={'/sign-up'}>I have not an account</Link></button>
            </div>
        </div>

    );
};

export default AuthForm;