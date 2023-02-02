import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image"
import FetchData from "../exemples/fetchData";

export default function Home() {
    return <Layout>
        <main className="page">
            <header className="hero">
                <StaticImage
                    src="../images/main.jpeg"
                    alt="Person Pouring Salt in Bowl"
                    className="hero-img"
                    placeholder="tracedSVG"
                    layout="fullWidth"
                ></StaticImage>
                <div className="hero-container">
                    <div className="hero-text">
                        <h1>gatsby recipes</h1>
                        <h4>no fluff, just recipes</h4>
                    </div>
                </div>
            </header>
            <FetchData/>
        </main>
    </Layout>;
}
