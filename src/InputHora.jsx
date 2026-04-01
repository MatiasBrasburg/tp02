import './Formulario.css'; 

function InputHora({ ContenidoInput }) {
  return (
  <input type="hora" name={ContenidoInput} className="u-full-width" placeholder={ContenidoInput}></input>
  );
}

export default InputHora;