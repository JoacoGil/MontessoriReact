import'./Productos.css';
import {Link} from "react-router-dom";

function Productos(props) {
    let dataproducto = [props.vermas, props.nombre, props.precio, props.descripcion, props.imagen, props.imagen2, props.imagen3];
  return (        
        <Link className="card" to='vermas/' state={{ id: props.vermas, nombre: props.nombre, precio:props.precio, descripcion: props.descripcion, imagen: props.imagen, imagen2: props.imagen2, imagen3:props.imagen3 }}>
            <img src={require(`../../img/Producto-${props.imagen}.JPG`)} alt="" />
            <h1>{props.nombre}</h1>
            <p className="price">$ {props.precio}</p>
            <p className='description'>{props.descripcion}</p>
            <Link className="card" to='vermas/' state={{ id: props.vermas, nombre: props.nombre, precio:props.precio, descripcion: props.descripcion, imagen: props.imagen, imagen2: props.imagen2, imagen3:props.imagen3 }}>
                <button>Ver más</button>
            </Link>
        </Link>
  )
}

export default Productos;