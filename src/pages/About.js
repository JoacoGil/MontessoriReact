import React from "react";
import './About.css';
  
const About = () => {
  return (
    <div id="containerabout">
      <div id="greycurtain">
        <div id="containertextoabout">
          <div id="divtitleimg">
            <h1>Sobre Nosotros</h1>
            <img src={require(`./../img/LogoMontessori.png`)} />
          </div>
          <p>Hola! Mi nombre es Katherine Marega, soy maestra con más de 25 años de experiencia, soy doble titulada tanto en educación común como en inicial, que fue a lo que más me dediqué. Me formé en Uruguay en el instituto normal María Stagnero de Munar.
              <br /><br />
            Inspirados por la pedagogía de María Montessori, este proyecto nace con la idea de innovar en el salón de clases, y con la misión de llegar a todos los niños y niñas del Uruguay con materiales educativos de alta calidad y a bajo costo.
        </p>
      </div>
      </div>
      
    </div>
  );
};
  
export default About;