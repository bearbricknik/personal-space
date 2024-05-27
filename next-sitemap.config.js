/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://huberdominik.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    transformRobotsTxt: async (_, robotsTxt) => {
      const withoutHost = robotsTxt.replace(
        `# Host\nHost: https://huberdominik.com\n\n`,
        "",
      ).replace('# *\n', "").replace('# Sitemaps\n', "");

      return withoutHost;
    },
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};