import Productos from '../components/Productos/Productos';
import React, { useEffect, useState } from 'react';

function Inicio() {
    const [data, setData]=useState([]);

    useEffect(()=>{
        fetch("./../data.json")
        .then((response) => response.json())
        .then((data)=>setData(data));
    },[]);
    console.log(data)
  return (
      <div className="Container">
         <h1 id='nuestrosproductos'>Nuestros Productos</h1>

        <div id='containerproductos'>
            {data.map((item)=>{
                return (
                <Productos 
                    key={item.id}
                    nombre={item.nombre}
                    imagen={item.imagen}
                    imagen2={item.imagen2}
                    imagen3={item.imagen3}
                    precio={item.precio}
                    descripcion={item.descripcion}
                    vermas={item.id}
                />)
            })}
        </div>
      </div>
  );
}

export default Inicio;
