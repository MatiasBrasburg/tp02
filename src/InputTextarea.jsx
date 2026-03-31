import './Formulario.css'; // Movemos solo los estilos de la tarjeta a este archivo

function inputTextarea({ ContenidoInput }) {
  return (
<textarea name={ContenidoInput} className="u-full-width"></textarea>
  );
}

export default inputTextarea;