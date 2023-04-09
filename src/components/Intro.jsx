import "./css/Intro.css"

const Intro = () => {
    const redirectToInvitePage = () => {
        window.location.href = " https://discord.com/oauth2/authorize?client_id=783716882896912405&permissions=1634200972535&scope=applications.commands%20bot"
    }

    return (
        <div className="intro">
            <h1>Olá, eu sou a Vex!</h1>
            <p>Sou apenas um simples bot para o <span className="discord-color">Discord</span></p>
            <div className="buttons">
                <button onClick={redirectToInvitePage}>Adicionar ao meu servidor</button>
            </div>
        </div>
    )
}  

export default Intro;