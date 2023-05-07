import Image from "next/image";
import { Inter } from "next/font/google";
import reviewData from "../data/review_data.json";
import scData from "../data/sc_data.json";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import ContentCard from "@/components/ContentCard";
const inter = Inter({ subsets: ["latin"] });
import siteData from "@/data/site_data.json";
import guideData from "@/data/sc_data.json";
import Link from "next/link";
const guides = () => {


  const posts = reviewData?.posts;
  const guides = guideData?.posts;
  const siteName = siteData?.name;
  const siteDescription = siteData?.description;
  return (
      <Layout
          pageTitle={siteName + " " + siteDescription}
          pageDescription={siteDescription}
      >

        <div className={" bg-base-100"}>

          <div className="hero pt-3 ">
            <div className="hero-content text-center text-base-content">
              <div className="max-w-md ">
                <h1 className="text-5xl font-extrabold"> Guides</h1>
                <p className="py-6 text-lg">{siteName} - Guides To Get You Going.</p>
                <div className=" grid gap-4">
                  {/*<Link className="btn btn-secondary "href="/guides">*/}
                  {/*  Guides*/}
                  {/*</Link>*/}
                  <Link className="btn btn-primary "href="/reviews">Reviews</Link>
                </div>
              </div>
            </div>
          </div>

          <ul className={"grid gap-4 px-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}>
            {guides?.map((p) => (
                <ContentCard key={p.id} content={p} />
            ))}
          </ul>
          {/*<ul className={"grid gap-4 px-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}>*/}
          {/*  {posts?.slice(0,10).map((p) => (*/}
          {/*      <ContentCard key={p.id} content={p} />*/}
          {/*  ))}*/}
          {/*</ul>*/}
        </div>
      </Layout>
  );
};
export default guides;
