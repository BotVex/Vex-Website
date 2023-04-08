import React from "react";

import "./css/Footer.css"

const Footer = () => {
    return (
        <div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="footer-wave">
                    <path d="M0,192L60,208C120,224,240,256,360,256C480,256,600,224,720,186.7C840,149,960,107,1080,128C1200,149,1320,235,1380,277.3L1440,320L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>
            </div>
            <div className="footer">
                <div className="footer-left">
                    <h3>Vex</h3>
                    <p>Comandos</p>
                    <p>Funções</p>
                    <p>Sobre</p>
                </div>
                <div className="footer-right">
                    <h3>Outros</h3>
                    <p>Github</p>
                    <p>Adicionar em meu servidor</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;