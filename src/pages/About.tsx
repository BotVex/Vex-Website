  import React from "react"

  import Header from "../components/Header"
  import Footer from "../components/Footer"
  import WaveContainer from "../components/WaveContainer"

  import "../scss/About.scss"
  import VexAvatar from "../assets/vex-avatar.png?url"
  import LoboAvatar from "../assets/lobo-avatar.png?url"


  const About: React.FC = () => {
    return (
      <>
        <Header/>
        <WaveContainer>
          <div className="ab-container">
            <div className="ab-box">
              <img className="ab-avatar" src={VexAvatar} alt="Vex avatar" draggable={false}/>
              <h2 className="ab-title">Sobre a Vex</h2>
              <p className="ab-description">
                Vex é um simples bot para Discord com foco em diversão e entretenimento!<br/><br/>
                A Vex possuí diversos comandos, úteis ou não ¯\_(ツ)_/¯.
              </p>
            </div>
          </div>
        </WaveContainer>
        <WaveContainer>
          <div className="ab-container">
            <div className="ab-box">
              <h2 className="ab-title">Criador</h2>
              <img className="ab-avatar" src={LoboAvatar} alt="Lobo avatar" draggable={false}/>
              <p className="ab-description">
                👋 Olar, sou o Lobo.<br/>
                contato via Discord: o_lobo
              </p>
            </div>
          </div>
        </WaveContainer>
        <Footer/>
      </>
    )
  }

  export default About
