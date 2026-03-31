import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Titulo from './Titulo'
import NosScript from './NosScpipt'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Titulo
    Contenido="Gestor de Citas"
    />
    

    <NosScript
    Contenido="You need to enable JavaScript to run this app."
    />


    <div id="root">
      <Titulo
      Contenido="ADMINISTRADOR DE PACIENTES"
      /> 

      <Formulario
      ContenidoH2 = "Crear mi Cita"
      Label1 = "Nombre Mascota"
      Label2 = "Nombre Dueño"
      Label3 = "hora"
      Label4 = "Sintomas"
      
      />
          </div>
            <Cita
            Mascota ="jojo"
            Dueño = "Franco"
            Fecha = '12/05/2005'
            Hora = "12:10"
            Sintomas = "dolor de panza"
            />

               
            <Cita
            Mascota ="sasa"
            Dueño = "mati"
            Fecha = '12/12/2016'
            Hora = "09:20"
            Sintomas = "Duerme mucho"
            />

               
            <Cita
            Mascota ="popo"
            Dueño = "Ramiro"
            Fecha = '20/04/1998'
            Hora = "15:05"
            Sintomas = "Parkinson"
            />
       




    </>
  )
}

export default App
