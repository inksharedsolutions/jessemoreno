/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const autoprefixer = require("autoprefixer");

module.exports = {
    pathPrefix: `/jessemoreno`,
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-transition-link`,
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                cssLoaderOptions: {
                    camelCase: false,
                },
                postCssPlugins: [autoprefixer()],
            },
        },
        {
            resolve: `gatsby-plugin-disqus`,
            options: {
                shortname: `jessemoreno`,
            },
        },
    ],
};
