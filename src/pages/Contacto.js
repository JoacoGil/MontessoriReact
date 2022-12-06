import React from "react";
import "./About.css";
import "./Contacto.css";

const Contacto = () => {
  return (
    <div id="containerabout">
      <div id="greycurtain">
        <div id="containertextoabout">
          <div id="divtitleimg">
                <h1>¡Contáctanos!</h1>
            <img src={require(`./../img/LogoMontessori.png`)} />
          </div>

          <div id="containerredes">
                        <div id="containerig">
                <a
                href="https://www.instagram.com/montessori_uy/"
                target="_blank"
                rel="noreferrer"
                >
                <img
                    src={require(`./../img/ig-instagram-icon.png`)}
                    alt="logo IG"
                    id="logoig"
                />
                </a>
                <a
                href="https://www.instagram.com/montessori_uy/"
                target="_blank"
                rel="noreferrer"
                >
                @Montessori_uy
                </a>
            </div>
            
            <div id="containerig">
                    <a href="https://www.facebook.com/uy.montessori" target="_blank" rel="noreferrer"><img src={require(`./../img/facebook-app-icon.png`)} alt="logo IG" id="logoig"/></a>
                    <a href="https://www.facebook.com/uy.montessori" target="_blank" rel="noreferrer">Montessori_uy</a>
                </div>
                
                <div id="containerig">
                    <a href="https://www.facebook.com/uy.montessori" target="_blank" rel="noreferrer"><img src={require(`./../img/wa-whatsapp-icon.png`)} alt="logo IG" id="logoig"/></a>
                    <a href="https://www.facebook.com/uy.montessori" target="_blank" rel="noreferrer">094 495 933</a>
                </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contacto;
