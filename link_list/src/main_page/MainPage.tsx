import React from "react";
import Link from "react-router-dom";
import logo from '../Assets/logo.png';
import './MainPage.css'

const MainPage: React.FC=()=>{
    return(
        <div className="main-page">
            <img src={logo} alt="Logo"/>
        </div>
    );
}
export default MainPage;