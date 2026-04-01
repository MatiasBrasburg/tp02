import { useState } from 'react'
import './App.css'
import Titulo from './Titulo'
import Formulario from './Formulario';
import Cita from './Cita';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Titulo Contenido="ADMINISTRADOR DE PACIENTES" /> 

      <div className="container">
        <div className="row">
          
          {/* COLUMNA IZQUIERDA: EL FORMULARIO */}
          <div className="one-half column">
            <Formulario
              ContenidoH2="Crear mi Cita"
              Label1="Nombre Mascota"
              Label2="Nombre Dueño"
              Label3="Hora"
              Label4="Sintomas"
              LabelFecha="Fecha"
            />
          </div>

          {/* COLUMNA DERECHA: LAS CITAS */}
          <div className="one-half column">
            <h2>Administra tus citas</h2>
            
            <Cita
              mascota="jojo"
              duenio="Franco"
              fecha="12/05/2005"
              hora="12:10"
              sintomas="dolor de panza"
            />
            <Cita
              mascota="sasa"
              duenio="mati"
              fecha="12/12/2016"
              hora="09:20"
              sintomas="Duerme mucho"
            />
            <Cita
              mascota="popo"
              duenio="Ramiro"
              fecha="20/04/1998"
              hora="15:05"
              sintomas="Parkinson"
            />
          </div>

        </div>
      </div>
    </>
  )
}

export default App