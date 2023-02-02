/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: 'Simply Recipes',
        description: 'Nice and clean recipes site',
        author: "@KarimMoustamid",
        person: {
            name: "Yummi",
            age: 7
        },
        simpleData: ['item 1', 'item 2'],
        complexData: [
            {name: "Dorry", age: 3},
            {name: "simba", age: 2},
        ]
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp` // Needed for dynamic images
    ]
};
