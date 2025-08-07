import logo from './logo.svg';
import './App.css';
import CompFuncional from './componentes/CompFuncionales/CompFuncional';
import EjemploProps from './componentes/EjemploProps/EjemploProps';
import EjemploEstado from './componentes/EjemploEstado/EjemploEstado';

function App() {

  //Variables del contenido
  const nombre= "Stephanie";
  const profesion ="Ingeniera";
  const ciudad = "Cartago";
  const imagen = logo;
  const mensaje = "Bienvenida a tu panel del programa"

  return (
    <>
    <EjemploProps titulo='Los cuentos de mi tia panchita' descripcion='Cuentos Costarricenses'/>
    <div className='contenedor'>
      <img src={imagen} alt='Foto de perfil' className='imagen'/>
      <h1>Hola, {nombre}</h1>
      <h2>{profesion}</h2>
      <p>Ubicación: {ciudad}</p>
      <p>{mensaje}</p>
    </div>
    <CompFuncional/>
    <EjemploProps titulo='Introduccion a React' descripcion='El curso de React para comprender terminos ...' />
    <EjemploEstado/>
    </>
  );
}

export default App;
