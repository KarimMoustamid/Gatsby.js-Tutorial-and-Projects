import React from "react"

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>&copy;</p> {new Date().getFullYear()} <span> SimpleRecipes</span>
      Build With{" "}
      <a href="https://www.gatsbyjs.com" target="_blank">
        Gatsbyjs
      </a>
    </footer>
  )
}

export default Footer
