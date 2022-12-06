import "./Vermas.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function Vermas() {
  
  const location = useLocation();

  const [imagen, setImagen] = useState(location.state.imagen);


  if (location.state.imagen2 === "-" && location.state.imagen3 === "-") {
    return (
        <div id="containervermas">
        <div className="divimg">
          <div className="product">
            <div className="product__images">
              <img
                src={require(`../img/Producto-${location.state.imagen}.JPG`)}
                alt="img product"
                className="product__main-image product__image--active"
                id="main-image"
              />

              <div className="product__slider-wrap">
                <div className="product__slider">
                <img
                    src={require(`../img/Producto-${location.state.imagen}.JPG`)}
                    alt="imgproduct"
                    className="product__image product__image--active"
                    onClick={() => setImagen(location.state.imagen)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nombredescripcion">
          <div className="titulovermas">
            <h1>{location.state.nombre}</h1>
          </div>
          <div className="descprecio">
            <p id="desc">{location.state.descripcion}</p>
            <p className="precio">
              <strong>$ {location.state.precio}</strong>
            </p>
          </div>
        </div>
      </div>
    );
  } else if (location.state.imagen3 === "-") {
    return (
      <div id="containervermas">
        <div className="divimg">
          <div className="product">
            <div className="product__images">
              <img
                src={require(`../img/Producto-${imagen}.JPG`)}
                alt="img product"
                className="product__main-image"
                id="main-image"
              />

              <div className="product__slider-wrap">
                <div className="product__slider">
                <img
                    src={require(`../img/Producto-${location.state.imagen}.JPG`)}
                    alt="imgproduct"
                    className="product__image product__image--active"
                    onClick={() => setImagen(location.state.imagen)}
                  />
                  <img
                    src={require(`../img/Producto-${location.state.imagen2}.JPG`)}
                    alt="imgproduct"
                    className="product__image"
                    onClick={() => setImagen(location.state.imagen2)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nombredescripcion">
          <div className="titulovermas">
            <h1>{location.state.nombre}</h1>
          </div>
          <div className="descprecio">
            <p id="desc">{location.state.descripcion}</p>
            <p className="precio">
              <strong>$ {location.state.precio}</strong>
            </p>
          </div>
        </div>
      </div>
    );
  } else
    return (
        <div id="containervermas">
        <div className="divimg">
          <div className="product">
            <div className="product__images">
              <img
                src={require(`../img/Producto-${imagen}.JPG`)}
                alt="img product"
                className="product__main-image"
                id="main-image"
              />

              <div className="product__slider-wrap">
                <div className="product__slider">
                <img
                    src={require(`../img/Producto-${location.state.imagen}.JPG`)}
                    alt="imgproduct"
                    className="product__image product__image--active"
                    onClick={() => setImagen(location.state.imagen)}
                  />
                  <img
                    src={require(`../img/Producto-${location.state.imagen2}.JPG`)}
                    alt="imgproduct"
                    className="product__image"
                    onClick={() => setImagen(location.state.imagen2)}
                  />
                  <img
                    src={require(`../img/Producto-${location.state.imagen3}.JPG`)}
                    alt="imgproduct"
                    className="product__image"
                    onClick={() => setImagen(location.state.imagen3)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nombredescripcion">
          <div className="titulovermas">
            <h1>{location.state.nombre}</h1>
          </div>
          <div className="descprecio">
            <p id="desc">{location.state.descripcion}</p>
            <p className="precio">
              <strong>$ {location.state.precio}</strong>
            </p>
          </div>
        </div>
      </div>

     
    );
}

export default Vermas;
