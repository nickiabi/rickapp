import React from "react";
import Tarjeta from "./Tarjeta";

const Cuerpo = () => {
  return (
    <main>
      <img
        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        alt="CaraRick"
      />
      <div>
        <h1> </h1>
      </div>
      <div className="Tarjetero">
        <Tarjeta />
        <Tarjeta />
        <Tarjeta />
        <Tarjeta />
        <Tarjeta />
      </div>
    </main>
  );
};

export default Cuerpo;
