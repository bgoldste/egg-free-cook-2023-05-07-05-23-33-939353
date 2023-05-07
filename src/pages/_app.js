import "@/styles/globals.css";
import Script from "next/script";
import siteData from "@/data/site_data.json";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
