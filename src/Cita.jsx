
import './Cita.css'; 

import Buttom from './Buttom';
import { useState } from 'react';


function Cita({ mascota, duenio, fecha, hora, sintomas, Citas, setCitas }) {
  
  const EliminarCita = () => {
    if (window.confirm("¿Estás seguro que querés eliminar esta cita?")) {
      const citasRestantes = Citas.filter( cita => 
          cita.mascota !== mascota || cita.hora !== hora 
      );
      setCitas(citasRestantes);
    }
  };

  return (
    <div className="cita">
      <p>Mascota: <span>{mascota}</span></p>
      <p>Dueño: <span>{duenio}</span></p>
      <p>Fecha: <span>{fecha}</span></p>
      <p>Hora: <span>{hora}</span></p>
      <p>Sintomas: <span>{sintomas}</span></p>
      
      <Buttom onClick={EliminarCita} Contenido="Eliminar" />
    </div>
  );
}
export default Cita;