module.exports = {
  siteMetadata: {
      title: `Jammers New Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
  "gatsby-plugin-sass",
   "gatsby-plugin-image",
   "gatsby-plugin-sharp",
      {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
  ]
};