import React from 'react';
import Header from "../Header/Header";
import Primary from "../Primary/Primary";
import Footer from "../Footer/Footer";
import "../style.css"

const Home = () => {
    const token = localStorage.getItem('token')
    if(!token){window.location.href = "/sign-in"}

    return (
        <div id={"home"}>
            <Header/>
            <Primary/>
            <Footer/>
        </div>
    );
};

export default Home;