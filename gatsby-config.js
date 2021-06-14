module.exports = {
  siteMetadata: {
    title: "HappyClub WebDev Bootcamp",
    subtitle: "Fullstack Webdev",
    description:
      "This is the course website for Happy Club FullStack Web Development Bootcamp",
    keywords: [
      "Full Stack Web Development",
      "Happy CLub IOE WRC",
      "NodeJs",
      "React",
      "Nginx",
      "Webpack",
      "MongoDb",
      "Javascript"
    ],
  },
  //pathPrefix: "/my-repo-name", // if you're using GitHub Pages, put the name of the repo here with a leading slash
  plugins: [
    'gatsby-plugin-theme-ui',
    `gatsby-plugin-sharp`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/lessons`,
        name: "markdown-pages",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: true,
              sizeByPixelDensity: false,
            },
          },
          {
            resolve: `gatsby-remark-embedder`,
            options: {
              customTransformers: [
                // Your custom transformers
              ],
              services: {
                // The service-specific options by the name of the service
              },
            },
          }
        ],
      },
    },
  ],
};
