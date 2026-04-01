import './Formulario.css'; 

function InputFecha({ ContenidoInput }) {
  return (
  <input type="date" name={ContenidoInput} className="u-full-width" placeholder={ContenidoInput}></input>
  );
}

export default InputFecha;