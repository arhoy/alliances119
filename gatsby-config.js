require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const URL = 'https://aquasar.io';

const queries = require('./src/utils/algolia');
console.log('quereis ared ', queries);

module.exports = {
  siteMetadata: {
    title: 'Aquasar - Web development, Gatsby and React Articles',
    description: 'Documenting my web development journey with Gatsby and React',
    author: 'Alex Quasar',
    twitterUsername: '@_aquasar',
    image: '/default.jpg',
    siteUrl: URL,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-emotion`,
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
          },
          {
            family: `Roboto`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/images/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `miss.knitsalot`,
      },
    },
    {
      resolve: `gatsby-plugin-stripe`,
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: [
          'Balance',
          'BalanceTransaction',
          'Product',
          'ApplicationFee',
          'Sku',
          'Subscription',
        ],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: true,
      },
    },
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey: process.env.SNIPCART_API,
        autopop: true,
        js: 'https://cdn.snipcart.com/themes/v3.0.0/default/snipcart.js',
        styles: 'https://cdn.snipcart.com/themes/v3.0.0/default/snipcart.css',
      },
    },
    `gatsby-plugin-twitter`,
    {
      resolve: 'gatsby-plugin-algolia',
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.GATSBY_ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000,
      },
    },
  ],
};
