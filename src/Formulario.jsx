import './Formulario.css'; 

import Input from './Input';
import InputHora from './InputHora';
import InputTextarea from './InputTextarea';
import Buttom from './Buttom';

function Formulario({ ContenidoH2, Label1, Label2, Label3, Label4 }) {
    return (
        <div className="container">
            <div className="row">
                <div className="one-half column">
                    <h2>{ContenidoH2}</h2>
                    <form>
                        <label>{Label1}</label>
                        <Input
                        ContenidoInput = {Label1}
                        />
                        <label>{Label2}</label>
   <Input
                        ContenidoInput = {Label1}
                        />
                       
                        <label>{Label3}</label>
                        <InputHora
                        ContenidoInput = "Hora"
                        />
                        <label>{Label4}</label>
                        <InputTextarea
                        ContenidoInput = "Sintomas"
                        />
                        <Buttom
                        ContenidoInput = "Agregar Cita"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Formulario;