
import './Cita.css'; 

import Buttom from './Buttom';

function Cita({ mascota, duenio, fecha, hora, sintomas }) {
  return (
    <div className="cita">
      <p>Mascota: <span>{mascota}</span></p>
      <p>Dueño: <span>{duenio}</span></p>
      <p>Fecha: <span>{fecha}</span></p>
      <p>Hora: <span>{hora}</span></p>
      <p>Sintomas: <span>{sintomas}</span></p>
      <Buttom
      Contenido = "Eliminar"
      />
    </div>
  );
}

export default Cita;