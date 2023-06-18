import React from "react"
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { redirect } from "../App"

import "../scss/Footer.scss"
import WaveTop from "./WaveTop"


const Footer: React.FC = () => {
    const navigate: NavigateFunction = useNavigate()

    const handleNavigate = (route: string) => {
        navigate(route)
    }

    return (
        <div>
            <div className="footer-wave">
                <WaveTop/>
            </div>
            <div className="footer">
                <div className="footer-left">
                    <h3>Vex</h3>
                    <p onClick={() => handleNavigate("/commands")}>Comandos</p>
                    <p onClick={() => handleNavigate("/about")}>Sobre</p>
                </div>
                <div className="footer-right">
                    <h3>Outros</h3>
                    <p onClick={() => redirect("https://github.com/BotVex/Vex.py", true)}>Github</p>
                    <p onClick={() => redirect("https://discord.com/oauth2/authorize?client_id=783716882896912405&permissions=1634200972535&scope=applications.commands%20bot", true)}>Adicionar ao meu servidor</p>
                </div>
            </div>
            <div className="ft-copyright">
                <p>Developed with ❤️ by <a href="https://github.com/Lobooooooo14" target="_blank">Lobooooooo14</a></p>
            </div>
        </div>
    )
}

export default Footer