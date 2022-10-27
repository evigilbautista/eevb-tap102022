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
        nombre="McLaren 650S"
        modelo="650 S"
        imagen="https://assets.stickpng.com/thumbs/584c58301fc21103bb375baf.png"
        descripcion="es un automóvil deportivo diseñado y producido por el fabricante británico McLaren Automotive, de 2014 a 2017. Se anunció en febrero de 2014 como un nuevo modelo, pero basado en el ya existente MP4-12C con un 25% de partes,6​ con el que comparte el chasis de fibra de carbono reforzada con polímero."
        sonido="BEEP BEEP"
        anio="2014"
      />
      <Car
        nombre="Roewe i6"
        modelo="i6"
        imagen="https://assets.stickpng.com/thumbs/5845984fbcb9df443a7fb795.png"
        descripcion="El Roewe i6 es un compacto sedán producido por SAIC Motor bajo la marca Roewe , sucediendo al Roewe 550 . El Roewe ei6 es la versión híbrida del i6. El Roewe i6 fue presentado por primera vez por el Roewe Vision-R, que debutó durante el Auto Show de Guangzhou 2015 "
        sonido="BEEP BEEP"
        anio="2015"
      />
    </div>
  );
}
