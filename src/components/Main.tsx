import React from "react";

import Features from "./Features";
import Intro from "./Intro";

import "./css/Main.css"

const Main: React.FC = () => {
    return (
        <div className="main">
            <Intro></Intro>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave-top">
                <path d="M0,288L60,245.3C120,203,240,117,360,117.3C480,117,600,203,720,245.3C840,288,960,288,1080,272C1200,256,1320,224,1380,208L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
            </svg>
            <Features></Features>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave-bottom">
                <path d="M0,224L48,240C96,256,192,288,288,288C384,288,480,256,576,224C672,192,768,160,864,160C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
        </div>
    )
}

export default Main;