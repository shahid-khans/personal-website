module.exports = {
  siteMetadata: {
    title: 'Nicolas Racchi',
    author: 'Nicolas Racchi'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        color: '#C93434',
        height: '7px',
        paths: ['/blog/**'],
        zIndex: `9999`
      }
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://www.nicolasracchi.com'
      }
    },
    'gatsby-plugin-layout',
    {
      resolve: 'gatsby-plugin-disqus',
      options: {
        shortname: 'nicolasracchi'
      }
    },
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    'gatsby-plugin-dark-mode',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nicolas Racchi`,
        short_name: `N.R.`,
        start_url: `/`,
        display: `standalone`,
        icon: 'src/img/icon.png'
      }
    }
  ]
};
