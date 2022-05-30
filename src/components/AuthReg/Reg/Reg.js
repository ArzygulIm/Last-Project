import React, {useEffect, useState} from 'react';
import {UserContext} from "../../../UserContext";
import {REGISTRATION_API} from "../../../config";
import RegForm from "../RegForm/RegForm";
import "../style.css"
import {Link} from "react-router-dom";
import loginBackground from "../../../images/login.png";
import AOS from "aos"
import "aos/dist/aos.css"

const Reg = () => {
    useEffect(()=>{
        AOS.init({
            offset:100,
            duration:1000,
            easing:'ease',
            //disable:'mobile',
            once: false,
        })
    })

    const reg = async (name, email, password) => {
        let data = {
            name: name,
            email: email,
            pass: password
        }

        const req = await fetch(REGISTRATION_API, {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'POST',
            body: JSON.stringify(data)
        })

        const res = await req.json()
        console.log(res)
        if (res.token) {
            localStorage.setItem('token', res.token)
            window.location.href = "/"

        } else {
            console.log(res)
        }
    }
    const [classname, setClassname] = useState(false)
    const classTrue = () => {
        setClassname(true)
    }

    const classFalse = () => {
        setClassname(false)
    }

    return (
        <UserContext.Provider value={{reg}}>
            <section id="auth-reg">
                <div className={"container auth-reg_container"}>
                    <div className="form-wrap">
                        <div className={"sign-in-title"}>
                            <Link to={'/sign-in'} onClick={classTrue}><h4>Sign in</h4></Link>
                        </div>
                        <div style={{
                            background: classname === false ? "red" : "lightsalmon",
                            zIndex: classname === false ? 1 : 0
                        }} className={"sign-up-title"}>
                            <Link to={'/sign-up'} onClick={classFalse}><h4>Sign up</h4></Link>
                        </div>
                        <RegForm/>
                        <div data-aos={"fade-left"} style={{width: "350px", height: "100%", backgroundColor: "white",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} className="left">
                            <h3 style={{fontSize:"35px",margin:"45px 15px",textAlign:"center",color:"#001546"}}>Welcome to my site! Please sign up.</h3>
                            <img src={loginBackground} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        </UserContext.Provider>
    );
};

export default Reg;