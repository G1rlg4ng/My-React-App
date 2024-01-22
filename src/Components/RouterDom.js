import React, { useState, createContext } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { NotFound } from "./pages/NotFound"


export const AppContext = createContext();

const RouterDom = () => {
 
  return (
    <div>
     
        <Router>
          {/* <Navbar/> */}
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="*" element={<NotFound/>}/>
          </Routes>
        </Router>
      
    </div>
  )
}

export default RouterDom
