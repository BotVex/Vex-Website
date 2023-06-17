import React from "react"
import { Link } from "react-router-dom"

import "../scss/NotFound.scss"


const NotFound: React.FC = () => {
  return (
    <div className="nf-content">
        <h1 className="nf-title">404</h1>
        <div  className="nf-descripton">
            <p>
                É, nadinha.
                <span style={{marginLeft: 10}}>
                    <Link className="nf-back" to="/">Retornar para a página inicial</Link>
                </span>
            </p>
        </div>
    </div>
  )
}

export default NotFound
