import React from "react";

import "./css/Footer.css"

const Footer = () => {
    return (
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
    )
}

export default Footer;