import './Formulario.css'; // Movemos solo los estilos de la tarjeta a este archivo

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
                        <inputHora
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