import * as React from "react"
import {Link} from 'gatsby'

export default function Home() {
    return <div>
        <h1>Hello Karim !</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
    </div>
}
