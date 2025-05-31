const SITE_PREFIX = `bachelors-dashboard/pr-preview/pr-${process.env.NEXT_PUBLIC_PR_NUMBER}`;
const isProductionFlag = process.env.NEXT_PUBLIC_PRODUCTION === "TRUE";
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  assetPrefix: !isProductionFlag ? (isProd ? `/${SITE_PREFIX}/` : "") : "",
  basePath: !isProductionFlag ? (isProd ? `/${SITE_PREFIX}` : "") : "",
  output: !isProductionFlag ? "export" : undefined,
};

export default nextConfig;
