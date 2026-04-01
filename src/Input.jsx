import './Formulario.css'; 

function Input({ ContenidoInput }) {
  return (
  <input type="text" name={ContenidoInput} className="u-full-width" placeholder={ContenidoInput}></input>
  );
}

export default NosScript;