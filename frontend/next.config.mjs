const isProd = process.env.NODE_ENV === "production";
const SITE_PREFIX = `bachelors-dashboard/pr-preview/pr-${process.env.PR_NUMBER}`;

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  assetPrefix: isProd ? `/${SITE_PREFIX}/` : "",
  basePath: isProd ? `/${SITE_PREFIX}` : "",
  output: "export",
};

export default nextConfig;
