const colors = require('./colors');

require('dotenv').config();

const plugins = [
  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: `Jonathan Lima Portfolio`,
      short_name: `Lima Portfolio`,
      start_url: '/',
      background_color: colors.background,
      theme_color: colors.primary,
      display: 'minimal-ui',
      icon: 'media/icon.png',
    },
  },
  {
    resolve: 'gatsby-source-graphql',
    options: {
      typeName: 'GitHub',
      fieldName: 'github',
      url: 'https://api.github.com/graphql',
      headers: {
        Authorization: `bearer ${process.env.GATSBY_PORTFOLIO_GITHUB_TOKEN}`,
      },
      fetchOptions: {},
    },
  },
  'gatsby-plugin-styled-components',
  'gatsby-transformer-remark',
  'gatsby-plugin-offline',
];

module.exports = {
  plugins,
};
