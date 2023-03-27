import React from "react";
import '../styles/banniere.css'

export default function Banniere(props) {
   return (
        <div className="banniere__container">
        <p>{props.title}</p>
        <div className="banniere__img__container">
            <img src={props.img} alt="décor naturel"></img>
        </div>
    </div>
   );
}
