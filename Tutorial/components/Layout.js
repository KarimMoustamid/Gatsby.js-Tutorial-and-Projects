import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
//! A modern, HTML5-ready alternative to CSS resets : https://necolas.github.io/normalize.css/
import "normalize.css"
import "../src/assets/css/main.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
