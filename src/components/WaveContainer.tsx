import React from "react"

import WaveTop from "./WaveTop"
import WaveBottom from "./WaveBottom"


interface IWaveContainer {
    children: React.ReactNode
}

const WaveContainer: React.FC<IWaveContainer> = ({children}) => {
    return (
        <div className="wave-container">
            <WaveTop/>
                {children}
            <WaveBottom/>
        </div>
    )
}

export default WaveContainer