import freeCodecampLogo from './imagenes/freecodecamp-logo.png';

function Logo(){
    return(
      <div className='freecodecamp-logo-contenedor'>
        <img src={freeCodecampLogo} className='freecodecamp-logo' />
      </div>
    )

}
export default Logo;