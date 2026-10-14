import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/servicios/acolchados", destination: "/servicios/lavado-de-acolchados", permanent: true },
      { source: "/blog/como-evitar-que-la-ropa-destina", destination: "/blog/como-evitar-que-la-ropa-pierda-color", permanent: true },
    ];
  },
  async headers() {
    return process.env.VERCEL_ENV === "preview" ? [{ source: "/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] }] : [];
  },
};
export default nextConfig;
