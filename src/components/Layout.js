import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
import Script from "next/script";
import siteData from "@/data/site_data.json";

export default function Layout({ children, pageTitle, pageDescription }) {
  const measurementId = siteData["ga_measurement_id"];
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
                  
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${measurementId}');
        `}
      </Script>
        <Script id="az-b1" type="text/javascript" strategy="lazyOnload">
            {`
            amzn_assoc_ad_type = "link_enhancement_widget";
            amzn_assoc_tracking_id = "dexterlabs-20";
            amzn_assoc_linkid = "4d7ad7aad1d2f07afbfbd4de67812deb";
            amzn_assoc_placement = "";
            amzn_assoc_marketplace = "amazon";
            amzn_assoc_region = "US";
               `}
        </Script>

        <Script id="az-b2"  strategy="lazyOnload" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&Operation=GetScript&ID=OneJS&WS=1&MarketPlace=US"></Script>
      <Navbar />
      <main className="">{children}</main>
      <Footer />
    </>
  );
}
