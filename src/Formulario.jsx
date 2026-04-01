import './Formulario.css'; 
import Input from './Input';
import InputHora from './InputHora';
import InputTextarea from './InputTextarea';
import  InputFecha  from "./InputFecha";
import Buttom from './Buttom';

function Formulario({ ContenidoH2, Label1, Label2, Label3, Label4, LabelFecha }) {
    return (
        <>
            <h2>{ContenidoH2}</h2>
            <form>
                <label>{Label1}</label>
                <Input ContenidoInput={Label1} />
                
                <label>{Label2}</label>
                <Input ContenidoInput={Label2} />
               
                 <label>{LabelFecha}</label>
                <InputFecha ContenidoInput={LabelFecha} />

                <label>{Label3}</label>
                <InputHora ContenidoInput={Label3} />
                
                <label>{Label4}</label>
                <InputTextarea ContenidoInput={Label4} />
                
                <Buttom Contenido="Agregar Cita" />
            </form>
        </>
    );
}

export default Formulario;