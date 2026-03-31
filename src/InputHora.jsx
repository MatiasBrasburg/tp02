import './Formulario.css'; // Movemos solo los estilos de la tarjeta a este archivo

function inputHora({ ContenidoInput }) {
  return (
  <input type="hora" name={ContenidoInput} className="u-full-width" placeholder={ContenidoInput}></input>
  );
}

export default inputHora;