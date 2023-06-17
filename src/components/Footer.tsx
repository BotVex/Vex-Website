import React from "react"
import { Link } from "react-router-dom"

import "../scss/Footer.scss"
import WaveTop from "./WaveTop"


const Footer: React.FC = () => {
    return (
        <div>
            <div className="footer-wave">
                <WaveTop/>
            </div>
            <div className="footer">
                <div className="footer-left">
                    <h3>Vex</h3>
                    <p>
                        <Link to="commands">Comandos</Link>
                    </p>
                    <p>
                        <Link to="about">Sobre</Link>
                    </p>
                </div>
                <div className="footer-right">
                    <h3>Outros</h3>
                    <p>
                        <a href="https://github.com/BotVex/Vex.py">Github</a>
                    </p>
                    <p>
                        <a href="https://discord.com/oauth2/authorize?client_id=783716882896912405&permissions=1634200972535&scope=applications.commands%20bot">Adicionar em meu servidor</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;