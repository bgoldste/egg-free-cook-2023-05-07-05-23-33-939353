import ProductLink from "@/components/ProductLink";
import guideData from "@/data/sc_data.json";
import Link from "next/link";
import Image from "next/image";
import formatSlug from "@/lib/formatSlug";
import Badge from "@/components/Badge"

export default function ContentCard({ content }) {
  console.log(content);

  let thumbnail = content?.products?.[0]?.product?.thumbnail;
  if (!thumbnail) {
    thumbnail = content?.product?.thumbnail;
    if (!thumbnail) {
      return null;
    }
  }

  // console.log(content.products[0])
  const guides = guideData.posts;
  return (



      <div className="card mx-auto xs:w-full glass mx-2 my-2  image-full">
          <figure className="">
              <Image
                  src={thumbnail}
                  alt={content.title}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="h-full w-full "
              ></Image>
          </figure>
        <div className="card-body  items-center text-center ">
          <h2 className="card-title text-white"><Link href={formatSlug(content.slug)}>{content.title} <Badge/></Link></h2>
            {/*<h4> {content.product.url}</h4>*/}

          <p className={"text-white"}>{content.content.slice(0, 250)}...</p>
          <div className="card-actions">
                {/*<h4>{content.products?.[0]['product'].url ?? "ERRRO"}</h4>*/}
              <Link href= { content.product?.url ?? content.products?.[0]['product'].url ?? "/"}>
            <button className="btn btn-secondary">Buy Now</button>
              </Link>
              <button className="btn btn-primary">
                  <Link href={formatSlug(content.slug)}>
                     Read More
                  </Link></button>
          </div>
        </div>

      </div>

  );
}
