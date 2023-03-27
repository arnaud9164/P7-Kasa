import React, { useState } from "react";
import "../styles/carousel.css";
import ArrowLeft from "../assets/ArrowLeft.png";
import ArrowRight from "../assets/ArrowRight.png";

function Carousel(props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const moreOneImg = () => {
    if (props.images.length - 1 >= 1) {
       return true;
    }
    return false;
  };

  function handleClickPrev() {
    setCurrentSlide((currentSlide - 1 + props.images.length) % props.images.length);
  }

  function handleClickNext() {
    setCurrentSlide((currentSlide + 1) % props.images.length);
  }

  return moreOneImg() ? (
    <div className="carousel" >
      <img className="carousel__img" src={props.images[currentSlide]} alt="images du logement" />
      <img className="carousel__arrow arrow__left" src={ArrowLeft} alt="flèche vers la gauche" onClick={handleClickPrev}></img>
      <img className="carousel__arrow arrow__right" src={ArrowRight} alt="flèche vers la droite" onClick={handleClickNext}></img>
      <span className="carousel__number">
            {currentSlide + 1}/{props.images.length}
      </span>
    </div>
  ) : (
    <div className="carousel">
      <img src={props.images[currentSlide]} className="carousel__img" alt="logement"></img>
    </div>
    
 );
}

export default Carousel;