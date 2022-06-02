import React from "react"
import Layout from "../../components/Layout"
// import "../../components/layout.css"
import { page, text } from "../../examples/home.module.css"
import { ExampleButton } from "../../examples/button"
export default function Home() {
  return (
    <Layout>
      <div className={page}>
        <h1>Home Page</h1>
        <p className={text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          tempora a perspiciatis aut eaque tenetur ducimus cumque culpa ea
          expedita.
        </p>
        <ExampleButton>Click Me</ExampleButton>
      </div>
    </Layout>
  )
}
