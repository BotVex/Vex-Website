import "./css/Intro.css"

const Intro = () => {
    return (
        <div className="intro">
            <h1>Olá, eu sou a Vex!</h1>
            <p>Sou apenas um simples bot para o <span className="discord-color">Discord</span></p>
            <div className="buttons">
                <button>Adicionar ao meu servidor</button>
            </div>
        </div>
    )
}  

export default Intro;