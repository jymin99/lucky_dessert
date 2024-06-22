import {Link} from "react-router-dom";
import React from "react";
import'./BoxButton.css';
import { title } from "process";

interface BoxButtonProps{
    title: string;
    link: string;
}

const BoxButton: React.FC<BoxButtonProps>=({title,link})=>{
    return(
        <Link to={link} className="box-button">
            {title}
        </Link>
    );
}

export default BoxButton;