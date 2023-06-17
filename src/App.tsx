import React from "react";
import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
// import Commands from "./pages/Commands"
// import About from "./pages/About"
import NotFound from "./pages/NotFound"


const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="commands" element={<Commands/>}/>
        <Route path="about" element={<About/>}/> */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
