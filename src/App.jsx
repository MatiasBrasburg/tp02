import { useEffect, useState } from 'react'
import './App.css'
import Titulo from './Titulo'
import Formulario from './Formulario';
import Cita from './Cita';



function App() {
  const [count, setCount] = useState(0)

  const [Citas, setCitas] = useState([
    {
      "mascota": "jojo",
      "duenio": "Franco",
      "fecha": "12/05/2005",
      "hora": "12:10",
      "sintomas": "dolor de panza"
    },
    {
      "mascota": "sasa",
      "duenio": "mati",
      "fecha": "12/12/2016",
      "hora": "09:20",
      "sintomas": "Duerme mucho"
    },
    {
      "mascota": "popo",
      "duenio": "Ramiro",
      "fecha": "20/04/1998",
      "hora": "15:05",
      "sintomas": "Parkinson"
    }
  ])




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
              setCitas = {Citas}
            />
          </div>

          {/* COLUMNA DERECHA: LAS CITAS */}
          <div className="one-half column">
            <h2>Administra tus citas</h2>

            <Cita
              mascota={Citas[0].mascota}
              duenio={Citas[0].duenio}
              fecha={Citas[0].fecha}
              hora={Citas[0].hora}
              sintomas={Citas[0].sintomas}
              Citas = {Citas}
              SetCitas = {SetCitas}
            />

            <Cita
              mascota={Citas[1].mascota}
              duenio={Citas[1].duenio}
              fecha={Citas[1].fecha}
              hora={Citas[1].hora}
              sintomas={Citas[1].sintomas}
              Citas = {Citas}
              SetCitas = {SetCitas}
            />

            <Cita
              mascota={Citas[2].mascota}
              duenio={Citas[2].duenio}
              fecha={Citas[2].fecha}
              hora={Citas[2].hora}
              sintomas={Citas[2].sintomas}
              Citas = {Citas}
              SetCitas = {SetCitas}
            />
          </div>

        </div>
      </div>
    </>
  )
}

export default App