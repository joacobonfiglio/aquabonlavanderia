"use client";

import { GoogleAnalytics } from "@next/third-parties/google";

// Límite de cliente propio para <GoogleAnalytics>: el paquete se publica en CommonJS y el build
// local (vinext) no detecta su "use client" si se importa directo desde el layout.
export default function GoogleAnalyticsTag({ gaId }: { gaId: string }) {
  return <GoogleAnalytics gaId={gaId} />;
}
