import logo from './logo.svg';
import './App.css';

function App() {

  //Variables del contenido
  const nombre= "Stephanie";
  const profesion ="Ingeniera";
  const ciudad = "Cartago";
  const imagen = logo;
  const mensaje = "Bienvenida a tu panel del programa"

  return (
    <div className='contenedor'>
      <img src={imagen} alt='Foto de perfil' className='imagen'/>
      <h1>Hola, {nombre}</h1>
      <h2>{profesion}</h2>
      <p>Ubicación: {ciudad}</p>
      <p>{mensaje}</p>
    </div>
    
  );
}

export default App;
