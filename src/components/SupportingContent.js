import reviewData from "../data/review_data.json";
import siteData from "../data/site_data.json";
import guideData from "../data/sc_data.json";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductBank from "@/components/ProductBank";
import RelatedContent from "@/components/RelatedContent";
import ProductCarousel from "@/components/ProductCarousel"
const SupportingContent = ({ post }) => {
  // const reviews = reviewData.posts;
  // const guides = guideData.posts;
  //
  // console.log(guides)
  console.log(post);
  const thumbnail = post.products[0]?.product?.thumbnail;
  const products = post?.products;

  return (
  <div>
    <div className=" flex flex-col items-center p-4 bg-base-100 text-base-content ">
      <article className="prose md:prose-md space-y-4">
        <h1>{post.title}</h1>
        {/*{thumbnail ? <img src={thumbnail} /> : null}*/}
        <ProductCarousel products={products} />
        <h4>As an Amazon Associate I earn from qualifying purchases.</h4>
        <div
            className="text-base-content"
          dangerouslySetInnerHTML={{
            __html: post.content.replace(/\n/g, "<br>"),
          }}
        />

        {/*<button class="btn btn-primary"><a href={post.product.url} target='blank'>Buy on Amazon for {post.product.price}</a></button>*/}
      </article>
    </div>
      <div className="">
        {products ? <ProductBank products={products} /> : null}
        <RelatedContent />
      </div>

    </div>
  );
};
export default SupportingContent;
