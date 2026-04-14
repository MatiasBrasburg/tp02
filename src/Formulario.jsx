import './Formulario.css'; 
import Input from './Input';
import InputHora from './InputHora';
import InputTextarea from './InputTextarea';
import  InputFecha  from "./InputFecha";
import Buttom from './Buttom';
import { useEffect, useState } from 'react'

function Formulario({ ContenidoH2, Label1, Label2, Label3, Label4, LabelFecha, setCitas, Citas }) {
    
    // 1. Creamos las variables para guardar lo que vas escribiendo
    const [mascota, setMascota] = useState('');
    const [duenio, setDuenio] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [sintomas, setSintomas] = useState('');

   
    const agregarConClick = () => {
     
        const nuevaCita = {
            mascota: mascota,
            duenio: duenio,
            fecha: fecha,
            hora: hora,
            sintomas: sintomas
        };

       
        setCitas([...Citas, nuevaCita]);

       
        setMascota('');
        setDuenio('');
        setFecha('');
        setHora('');
        setSintomas('');
    };

    return (
        <>
            <h2>{ContenidoH2}</h2>
            
            <div>
                <label>{Label1}</label>
                <input 
                    type="text" 
                    value={mascota} 
                    onChange={(e) => setMascota(e.target.value)} 
                />
                
                <label>{Label2}</label>
                <input 
                    type="text" 
                    value={duenio} 
                    onChange={(e) => setDuenio(e.target.value)} 
                />
               
                <label>{LabelFecha}</label>
                <input 
                    type="date" 
                    value={fecha} 
                    onChange={(e) => setFecha(e.target.value)} 
                />

                <label>{Label3}</label>
                <input 
                    type="time" 
                    value={hora} 
                    onChange={(e) => setHora(e.target.value)} 
                />
                
                <label>{Label4}</label>
                <textarea 
                    value={sintomas} 
                    onChange={(e) => setSintomas(e.target.value)}
                ></textarea>
                
                <Buttom onClick={agregarConClick} Contenido="Agregar Cita" />
            </div>
        </>
    );
}

export default Formulario;