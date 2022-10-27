import React from 'react';
import './style.css';
import Car from './Car/Car.js';

export default function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Car
        nombre="Audi e-tron"
        modelo="Audi e-tron GT"
        imagen="https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_d71cdaceff82463c893d1d117fc2802d.jpg"
        descripcion="Audi e-tron GT 2022 utiliza motores eléctricos en la parte delantera y trasera para generar 469 caballos de fuerza en conducción normal y hasta 522 caballos de fuerza durante 2,5 segundos cuando el control de lanzamiento está activo."
        sonido="BEEP BEEP"
        anio="2022"
      />
      <Car
        nombre="BMW I4"
        modelo="BMW I4 2022"
        imagen="https://img.remediosdigitales.com/ddac4f/bmw-i4-2022-1600-01/450_1000.jpg"
        descripcion="El BMW i4 eDrive40 2022 es un sedán de tracción trasera de 335 caballos de fuerza y altura baja. El modelo base en la línea, el i4 eDrive40 tiene un precio inicial de 1.1 millones de pesos y un alcance estimado por BMW de hasta 300 millas con una sola carga."
        sonido="BEEP BEEP"
        anio="2022"
      />
    </div>
  );
}
