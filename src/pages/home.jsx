import React from "react";
import "../styles/home.css";
import Banniere from "../components/Banniere";
import Thumb from "../components/Thumb";
import image from "../assets/Home.png";

export default function Home() {
  return (
    <div className="home">
        <Banniere img = {image} title = "Chez vous, partout et ailleurs"/>
        <Thumb />
    </div>
  );
}
