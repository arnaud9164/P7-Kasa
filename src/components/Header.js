import React from "react";
import { Link } from 'react-router-dom'
import '../styles/header.css'
import Img from "../assets/LOGO_Header.png";

export default function Header() {
   return (
      <div className="header">
         <nav>
            <img className="header__logo" src={Img} alt="logo de Kasa"></img>
            <ul>
               <li>
                  <Link to="/">Accueil</Link>
               </li>
               <li>
                  <Link to="/about">A Propos</Link>
               </li>
            </ul>
         </nav>
      </div>
   );
}
