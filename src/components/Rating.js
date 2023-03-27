import React from "react";
import Star from "../assets/Star.png";
import EmptyStar from "../assets/EmptyStar.png";

export default function Rating(props) {
   const elementRange = [1, 2, 3, 4, 5];

   return elementRange.map((element, key) =>
      element <= props.rate ? (
         <img src={Star} alt="étoile pleine" key={key} />
      ) : (
         <img src={EmptyStar} alt="étoile vide" key={key}/>
      )
   );
}