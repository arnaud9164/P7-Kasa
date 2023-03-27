import React from "react";
import { useParams } from "react-router-dom";
import Products from "../products.json";
import Hebergement from "../components/Hebergement";
import Error from "./Error";


export default function FicheLogement() {
    const params = useParams();
    let product = Products.find((product) => params.id === product.id);
    if (!product){
        return <Error />;
    }else{
        return <Hebergement />
    }
} 
