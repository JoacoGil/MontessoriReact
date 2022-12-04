import "./Footer.css";

export const Footer = () => {
  return (
    <footer id="footer">

        <div className="grid">
            <a href="/"><img src={require(`../../img/LogoMontessori.png`)} alt="Logo Montessori" /></a>
            <p>
                <span id="contacto-p">Contacto: </span>
                <br></br>
                montessoriuruguayofficial@gmail.com
            </p>
            <div id="containerig">
                <a href="https://www.instagram.com/montessori_uy/" target="_blank" rel="noreferrer">
                    <img src={require(`../../img/ig-instagram-icon.png`)} alt="logo IG" id="logoig"/>
                </a>
                <a href="https://www.instagram.com/montessori_uy/" target="_blank" rel="noreferrer">@Montessori_uy</a>
            </div>
            <div id="containerig">
                <a href="https://www.facebook.com/uy.montessori" target="_blank" rel="noreferrer"><img src={require(`../../img/facebook-app-icon.png`)} alt="logo IG" id="logoig"/></a>
                <a href="https://www.facebook.com/uy.montessori" target="_blank" rel="noreferrer">Montessori_uy</a>
            </div>
        </div>
        <div className="copyright">
        <p id="copyright">Copyright © 2022 Montessori_uy. Todos los derechos reservados.</p>
        </div>
    </footer>
  );
};