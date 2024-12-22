const isProd = process.env.NODE_ENV === "production";
const SITE_PREFIX = "bachelors-dashboard";

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? `/${SITE_PREFIX}/` : "",
  basePath: isProd ? `/${SITE_PREFIX}` : "",
  output: "export",
};

export default nextConfig;
