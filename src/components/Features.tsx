import React from "react";

import Feature, { IFeature } from "./Feature";

import "./css/Features.css"

import  Roleplay from "../assets/roleplay.png"


const features: IFeature[] = [
    {
        title: "Roleplay",
        description: "Com seu comando de roleplay, você pode realizar ações no seu servidor de uma maneira totalmente diferente.",
        image: Roleplay,
        left: false
    }
]

const Features: React.FC = () => {
    return ( 
        <div className="features">
            {features.map((element, key) => <Feature key={key} feature={element}></Feature>)}
        </div>
     );
}
 
export default Features;