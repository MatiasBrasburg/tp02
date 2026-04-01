import './Formulario.css'; 

function inputTextarea({ ContenidoInput }) {
  return (
<textarea name={ContenidoInput} className="u-full-width"></textarea>
  );
}

export default inputTextarea;