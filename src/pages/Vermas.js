import "./Vermas.css";
import { useLocation } from "react-router-dom";

function Vermas() {
  const mainImage = document.getElementById("main-image");
  const images = document.querySelectorAll(".product__image");

  images.forEach((image) => {
    image.addEventListener("click", (event) => {
      mainImage.src = event.target.src;

      document
        .querySelector(".product__image--active")
        .classList.remove("product__image--active");

      event.target.classList.add("product__image--active");
    });
  });

  const location = useLocation();

  if (location.state.imagen2 == "-" && location.state.imagen3 == "-") {
    return (
      <div id="containervermas">
        <div className="divimg">
          <div className="product">
            <div className="product__images">
              <img
                src={require(`../img/Producto-${location.state.imagen}.JPG`)}
                alt="img product"
                className="product__main-image"
                id="main-image"
              />
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
  } else if (location.state.imagen3 == "-") {
    return (
      <div id="containervermas">
        <div className="divimg">
          <div className="product">
            <div className="product__images">
              <img
                src={require(`../img/Producto-${location.state.imagen}.JPG`)}
                alt="img product"
                className="product__main-image"
                id="main-image"
              />

              <div className="product__slider-wrap">
                <div className="product__slider">
                  <img
                    src={require(`../img/Producto-${location.state.imagen2}.JPG`)}
                    alt="imgproduct"
                    className="product__image product__image--active"
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
                src={require(`../img/Producto-${location.state.imagen}.JPG`)}
                alt="img product"
                className="product__main-image"
                id="main-image"
              />

              <div className="product__slider-wrap">
                <div className="product__slider">
                  <img
                    src={require(`../img/Producto-${location.state.imagen2}.JPG`)}
                    alt="imgproduct"
                    className="product__image product__image--active"
                  />
                  <img
                    src={require(`../img/Producto-${location.state.imagen3}.JPG`)}
                    alt="imgproduct"
                    className="product__image product__image--active"
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
