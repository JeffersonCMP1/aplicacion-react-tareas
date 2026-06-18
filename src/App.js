import logo from './logo.svg';
import './App.css';
//import freeCodecampLogo from './imagenes/freecodecamp-logo.png';
import Logo from './Logo';

function App() {
  return (
    <div className="Aplicacion-tareas">
      
      {/* <div className='freecodecamp-logo-contenedor'>
        <img src={freeCodecampLogo} className='freecodecamp-logo' />
      </div> */}
      {/* aqui esta el componente logo*/}
      <Logo></Logo>

      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
      </div>
      
    </div>


  );
}

export default App;
