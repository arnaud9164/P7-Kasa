import React from "react";
import Collapse from "../components/Collapse";
import Banniere from "../components/Banniere";
import '../styles/about.css'
import image from "../assets/About.png";

export default function About() {
    return (
        <div className="about">
            <Banniere img = {image}/>
            <div className="collaspe__container">
                <div className="collapse">
                    <Collapse trigger="Fiabilité">
                        <p>Les annonces postées sur Kasa garantissent une fiabilité totale.
                            Les photos sont conformes aux logements, et toutes les informations 
                            sont régulièrement vérifiées par nos équipes.
                        </p>
                    </Collapse>
                </div>
                <div className="collapse">
                    <Collapse trigger="Respect">
                        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. 
                            Tout comportement discriminatoire ou de perturbation du voisinage 
                            entraînera une exclusion de notre plateforme.
                        </p>
                    </Collapse>
                </div>
                <div className="collapse">
                    <Collapse trigger="Service">
                        <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
                             N'hésitez pas à nous contacter si vous avez la moindre question.
                        </p>
                    </Collapse>
                </div>
                <div className="collapse">
                    <Collapse trigger="Sécurité">
                        <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,
                             chaque logement correspond aux critères de sécurité établis par nos services.
                              En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes 
                              de vérifier que les standards sont bien respectés.
                             Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                        </p>
                    </Collapse>
                </div>
            </div>
        </div>
    )
}