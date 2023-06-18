import React from "react"

import WaveTop from "./WaveTop"
import WaveBottom from "./WaveBottom"

import "../scss/WaveContainer.scss"


interface IWaveContainer {
    children: React.ReactNode
}

const WaveContainer: React.FC<IWaveContainer> = ({children}) => {
    return (
        <div className="wv-container">
            <WaveTop/>
                {children}
            <WaveBottom/>
        </div>
    )
}

export default WaveContainer