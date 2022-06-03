import React from "react"
import Layout from "../../components/Layout"

const contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Seitan messenger bag sustainable</h3>
            <p>
              kombucha master cleanse synth occupy farm-to-table freegan
              activated charcoal slow-carb. Etsy palo santo vice deep v.
            </p>
            <p>
              Dreamcatcher mlkshk kale chips organic bitters, irony wolf hell
              of. Poke polaroid portland, XOXO heirloom YOLO pug quinoa.
            </p>
            <p>
              Jianbing keffiyeh green juice street art post-ironic vape
              activated charcoal man braid seitan next level you probably
              haven't heard of them.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" placeholder="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="email"
                />
              </div>
              <div className="form-row">
                <label htmlFor="message">your message</label>
                <textarea name="message" id="message" placeholder="message" />
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default contact
