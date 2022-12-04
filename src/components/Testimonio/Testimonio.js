import React from 'react'
import'./Testimonio.css';


function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
        <img className='imagen-testimonio' src={require(`../../img/imagen-${props.imagen}.jpeg`)} alt='Foto Ejemplo' />
        <div className='contenedor-texto-testimonio'>
            <p className='nombre-testimonio'><strong>{props.nombre}</strong></p>
            <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
            <p className='texto-testimonio'>{props.testimonio}</p>
        </div>
    </div>
  )
}

export default Testimonio;