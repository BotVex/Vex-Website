import React from "react"

import Header from "../components/Header"
import Features from "../components/Features"
import Footer from "../components/Footer"
import WaveContainer from "../components/WaveContainer"

import "../scss/Home.scss"


const Home: React.FC = () => {
  const redirectToInvitePage = () => {
      window.location.href = "https://discord.com/oauth2/authorize?client_id=783716882896912405&permissions=1634200972535&scope=applications.commands%20bot"
  }

  return (
    <div>
      <Header/>
      <div className="intro">
        <h1>Olá, eu sou a Vex!</h1>
        <p>Sou apenas um simples bot para o <span className="discord-color">Discord</span></p>
        <div className="intro-buttons">
            <button onClick={redirectToInvitePage}>Adicionar ao meu servidor</button>
        </div>
      </div>
      <WaveContainer>
        <Features/>
      </WaveContainer>
      <Footer/>
    </div>
  )
}

export default Home
