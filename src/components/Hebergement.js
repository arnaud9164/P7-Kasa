import React from "react";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import Products from "../products.json";
import Collapse from "./Collapse";
import Rating from "./Rating";
import "../styles/ficheLogement.css";

export default function Hebergement() {
    const params = useParams();
    let product = Products.find((product) => params.id === product.id);
    return (
        <div>
          <div className="carousel__container" >
              <Carousel images={product.pictures} />
          </div>
          <div className="logement__information__container">
              <div className="logement__title">
                  <h2>{product.title}</h2>
                  <h3>{product.location}</h3>
                  <div className="logement__tag__container">
                      {product.tags.map((tag, key) => (
                          <div className="logement__tag" key={key}>
                              {tag}
                          </div>
                      ))}
                  </div>
              </div>
              <div className="host__container">
                  <div className="host__name">
                      <p>{product.host.name}</p>
                      <img className="host__img" src={product.host.picture} alt="Propriétaire du logement"/>
                  </div>
                  <div className="rating__container">
                      <Rating rate={product.rating} />
                  </div>
              </div>
          </div>
          <div className="collapse__container">
              <div className="logement__collapse collapse__left">
                  <Collapse trigger="Description">
                      <p>{product.description}</p>
                  </Collapse>
              </div>
              <div className="logement__collapse collapse__right">
                  <Collapse trigger="Equipements">
                        <div>
                            {product.equipments.map((texte, e) => (
                              <p key={e}>{texte}</p>
                            ))}
                        </div>
                  </Collapse>
              </div>
          </div>
      </div>
    );
  }

  