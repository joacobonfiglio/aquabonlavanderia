import type { NextConfig } from "next";

// Redirecciones permanentes. Regla del proyecto: una URL publicada no se borra sin 301.
const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/servicios/acolchados", destination: "/servicios/lavado-de-acolchados", permanent: true },
      // 07/11/2026: competía con /servicios/tintoreria por "tintorería mar del plata centro" y no tuvo
      // impresiones en 3 meses. Una sola página por servicio: el Centro se cubre con un H2 ahí.
      { source: "/tintoreria-centro-mar-del-plata", destination: "/servicios/tintoreria", permanent: true },
      // 07/11/2026: las tres guías de manchas se fusionaron en una sola, con intención de contratar.
      { source: "/blog/como-sacar-manchas-de-sangre-de-la-ropa", destination: "/blog/como-sacar-manchas-dificiles-de-la-ropa", permanent: true },
      { source: "/blog/como-sacar-manchas-de-vino-de-la-ropa", destination: "/blog/como-sacar-manchas-dificiles-de-la-ropa", permanent: true },
      { source: "/blog/como-sacar-manchas-de-aceite-de-la-ropa", destination: "/blog/como-sacar-manchas-dificiles-de-la-ropa", permanent: true },
    ];
  },
};

export default nextConfig;
