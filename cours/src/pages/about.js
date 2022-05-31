import React from "react"
import { Link } from "gatsby"

const about = () => {
  return (
    <div>
      <h1>About Page</h1>
      <Link to="/">Home</Link>
      <Link to="/blog/post">My First Post</Link>
    </div>
  )
}

export default about
