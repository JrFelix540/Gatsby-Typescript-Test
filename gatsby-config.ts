import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env.development`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: ["gatsby-plugin-webpack-bundle-analyser-v2"],
};

export default config;
