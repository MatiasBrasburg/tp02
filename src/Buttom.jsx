import './Formulario.css'; // Movemos solo los estilos de la tarjeta a este archivo

function Buttom({ Contenido }) {
  return (
   <button type="submit" className="u-full-width button-primary">{Contenido}</button>
  );
}

export default Buttom;