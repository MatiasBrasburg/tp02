import './Titulo.css'; // Movemos solo los estilos de la tarjeta a este archivo

function Titulo({ Contenido }) {
  return (
   <h1 className='Titulo'>{Contenido}</h1>
  );
}

export default Titulo;