import React from "react";
import Tarjeta from "./Tarjeta";
const infoPersonaje = [
  {
    nombre: "rick", urlImagen: ""

  },
  {
    nombre: "rick", urlImagen: ""
  },
  {
    nombre: "rick", urlImagen: ""
  },
];
const transformarInfoPersonaje = ({ nombre, urlImagen }) => {
  return <Tarjeta urlImagen={urlImagen} nombrePersonaje={nombre} />
};
const tarjetas = infoPersonaje.map(transformarInfoPersonaje);

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
      <div className="Tarjetero">{tarjetas}</div>
    </main >
  );
};

export default Cuerpo;
