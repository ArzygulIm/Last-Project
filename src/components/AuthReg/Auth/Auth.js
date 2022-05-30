import React, {useState,useEffect} from 'react';
import {AUTHORIZATION_API} from "../../../config";
import {UserContext} from "../../../UserContext";
import AuthForm from "../AuthForm/AuthForm";
import "../style.css"
import loginBackground from "../../../images/login.png"
import {Link} from "react-router-dom";
import AOS from "aos"
import "aos/dist/aos.css"

// arzygulimankulova@gmail.com  Qwer.1ty
const Auth = () => {

    useEffect(()=>{
        AOS.init({
            offset:100,
            duration:1000,
            easing:'ease',
            //disable:'mobile',
            once: false,
        })
    })

    const auth = async (email, password) => {
        let data = {
            email: email,
            pass: password
        }
        try {
            const req = await fetch(AUTHORIZATION_API, {
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
        } catch (e) {
            alert('Error!')
        }
    }
    const [classname, setClassname] = useState(true)
    const classTrue = () => {
        setClassname(true)
    }

    const classFalse = () => {
        setClassname(false)
    }
    console.log(classname)
    return (
        <UserContext.Provider value={{auth}}>
            <section id="auth-reg">
                <div  className={"container auth-reg_container"}>
                    <div className="form-wrap">


                        <div style={{
                            background: classname === true ? "red" : "lightsalmon",
                            zIndex: classname === true ? 1 : 0
                        }}
                             className={"sign-in-title"}>
                            <Link to={'/sign-in'} onClick={classTrue}><h4>Sign in</h4></Link>
                        </div>

                        <div className={"sign-up-title"}>
                            <Link to={'/sign-up'} onClick={classFalse}><h4>Sign up</h4></Link>
                        </div>
                        <AuthForm/>
                        <div data-aos={"fade-right"} style={{width: "350px", height: "100%", backgroundColor: "white",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} className="right">
                            <h3 style={{fontSize:"35px",margin:"45px 15px",textAlign:"center",color:"#001546"}}>Welcome back! Please sign in</h3>
                            <img src={loginBackground} alt=""/>
                        </div>


                    </div>
                </div>
            </section>
        </UserContext.Provider>
    );
};

export default Auth;