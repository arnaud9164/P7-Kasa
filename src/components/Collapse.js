import React, { useState } from "react";
import ArrowTop from "../assets/ArrowTop.png";
import ArrowBot from "../assets/ArrowBot.png";
import '../styles/collapse.css'

function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button className="collapse__button" onClick={handleClick}>{props.trigger}<img src={isOpen ? ArrowTop : ArrowBot} alt="flèche" /></button>
      {isOpen && <div className="collapse__p">{props.children}</div>}
    </div>
  );
}

export default Collapse;