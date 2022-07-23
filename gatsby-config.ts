import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  pathPrefix: `/totu-public`,
  siteMetadata: {
    title: `TOTU`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-layout`,
    'gatsby-plugin-postcss',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `montserrat\:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700`,
          `quicksand\:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700`
        ],
        display: 'swap'
      }
    },
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     'trackingId': ''
    //   }
    // },
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        'icon': 'src/images/icon.png'
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`
      }
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`en`, `pl`],
        defaultLanguage: `pl`,
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        siteUrl: `https://example.com`,
        // if you are using trailingSlash gatsby config include it here, as well (the default is 'always')
        trailingSlash: 'always',
        // you can pass any i18next options
        i18nextOptions: {
          interpolation: {
            escapeValue: false // not needed for react as it escapes by default
          },
          // keySeparator: false,
          // nsSeparator: false
        },
        // pages: [
        //   {
        //     matchPath: '/:lang?/blog/:uid',
        //     getLanguageFromPath: true,
        //     excludeLanguages: ['es']
        //   },
        //   {
        //     matchPath: '/preview',
        //     languages: ['en']
        //   }
        // ]
      }
    }
  ]
};

export default config;
