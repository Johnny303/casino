import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"

import { Link, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import { Casinos } from "./pages/Casinos"
import { Casino } from "./pages/Casino"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faUser, faSackDollar } from "@fortawesome/free-solid-svg-icons"

library.add(faUser, faSackDollar)

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <FontAwesomeIcon icon={faSackDollar} />
        </div>

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/casinos">Casinos</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/casinos" element={<Casinos />} />
        <Route path="/casino/:id" element={<Casino />} />
      </Routes>
    </>
  )
}

export default App
