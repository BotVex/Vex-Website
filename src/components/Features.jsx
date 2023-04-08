import Feature from "./Feature";

import "./css/Features.css"

import  Roleplay from "../assets/roleplay.png"

const Features = () => {
    const features = [
        {
            id: 1,
            title: "Roleplay",
            description: "Com seu comando de roleplay, você pode realizar ações no seu servidor de uma maneira totalmente diferente.",
            image: Roleplay,
            left: false
        }
    ]

    return ( 
        <div className="features">
            {features.map((element) => <Feature key={element.id} feature={element}></Feature>)}
        </div>
     );
}
 
export default Features;