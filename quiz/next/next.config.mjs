/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    //!!!!!!!! USE fetchSVGServerSide FROM GLOBALS INSTEAD

    // IMPORTANT FOR ALLOWING <IMAGE> TAG TO FETCH SVG'S SERVER-SIDE
    // dangerouslyAllowSVG: true,
    // contentDispositionType: "attachment",
    // contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    //
    remotePatterns: [
      {
        protocol: "http",
        hostname: "strapi",
        port: "1337",
        pathname: "/uploads/**/*",
      },
    ],
  },
};

export default nextConfig;
