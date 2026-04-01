import './Formulario.css'; 

function inputHora({ ContenidoInput }) {
  return (
  <input type="hora" name={ContenidoInput} className="u-full-width" placeholder={ContenidoInput}></input>
  );
}

export default inputHora;