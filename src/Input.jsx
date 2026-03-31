import './Formulario.css'; // Movemos solo los estilos de la tarjeta a este archivo

function Input({ ContenidoInput }) {
  return (
  <input type="text" name={ContenidoInput} className="u-full-width" placeholder={ContenidoInput}></input>
  );
}

export default NosScript;