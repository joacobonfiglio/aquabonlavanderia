import Script from "next/script";

/** The public widget ID is supplied by the business owner; reviews stay managed in Elfsight. */
export default function GoogleReviewsWidget() {
  return <>
    <Script id="elfsight-platform" src="https://elfsightcdn.com/platform.js" strategy="afterInteractive" />
    <div className="elfsight-app-6407271c-6500-44d6-b860-d0a83ba7ac23" data-elfsight-app-lazy />
  </>;
}
