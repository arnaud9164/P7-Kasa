import React, { useState } from "react";
import { Link } from "react-router-dom";
import Products from "../products.json";
import "../styles/thumb.css";



export default function Thumb() {
    let [i] = useState(0);
    return (
        <div className="gallery">
            {Products.map((product) => (
            <Link to={`/FicheLogement/${product.id}`} className="thumb__item" key={product.id}>
                <img src={product.pictures[i]} alt="logement" className="thumb__img"/>
                <div className="thumb__title">
                    <span>{product.title}</span>
                </div>
            </Link>
            ))}
        </div>
    );
 }