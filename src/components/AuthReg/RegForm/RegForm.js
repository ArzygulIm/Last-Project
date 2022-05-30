import React, {useState, useContext, useEffect} from 'react';
import {UserContext} from "../../../UserContext";
import {Link} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"


const RegForm = () => {
    useEffect(()=>{
        AOS.init({
            offset:100,
            duration:1000,
            easing:'ease',
            //disable:'mobile',
            once: false,
        })
    })
    const {reg} = useContext(UserContext)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div data-aos={"fade-right"} style={{padding: "60px 40px"}} className="form right">

            <input className={"username-input"} onChange={e => {
                setName(e.target.value)
            }} type="text" placeholder="Username"/>

            <input className={"email-input"} onChange={e => {
                setEmail(e.target.value)
            }} type="text" placeholder="email"/>

            <input className={"password-input"} onChange={e => {
                setPassword(e.target.value)
            }} type="text" placeholder="password"/>

            <div className="btn-wrap">
                <button><Link to={'/sign-in'}>I have an account!</Link></button>
                <button onClick={() => reg(name, email, password)}>Sign up</button>
            </div>
        </div>
    );
};

export default RegForm;