import React from "react";

const Tarjeta = ({urlImagen, nombrePersonaje}) => {
  return (
    <div className="Tarjeta">
      <div className="imagentarjeta">
        <img src="https://rickandmortyapi.com/api/character/avatar/72.jpeg" alt="Cool Rick" />
      </div>
      <div className="DescripcionTarjeta">
        <h4>
          <a href="https://rickandmortyapi.com/api/character/72">Nombre Personaje</a>
        </h4>
        <p className="Estado">Estado - tipo de criatura</p>

        <div className="LocacionTarjeta">
          <h5>ultima locacion conocida</h5>
          <p>Localizacion</p>
        </div>
        <div className="LocacionTarjeta">
          <h5>ultima locacion conocida</h5>
          <p>Localizacion</p>
        </div>
      </div>
    </div>
  );
};

export default Tarjeta;
