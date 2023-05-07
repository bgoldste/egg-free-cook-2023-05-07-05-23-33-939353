import Image from "next/image";
import Link from "next/link";
import reviewData from "@/data/review_data.json";
import formatSlug from "@/lib/formatSlug";
export default function ProductLink({ product }) {
  const review = reviewData.posts.find((r) => r.product.id === product.id);
  const slug = review?.slug;
  if (!slug) {
    return null;
  }

  return (
    <div className="bg-neutral-content text-secondary card card-compact bg-base-100 shadow-xl ">
      <figure>
        <Image
          src={product.thumbnail}
          alt={product.name}
          width="0"
          height="0"
          sizes="100vw"
          className="h-48 w-48 "
        ></Image>
      </figure>
        <div className="card-body">
            <div className="card-title">
              <h2 className="prose-md ">
                <Link href={product.url}>{product.name}</Link>
              </h2>
            </div>
            <div className="card-actions grid grid-cols-2">
                {slug ? (
                    <Link className="btn-link btn" href={slug}>
                        Read review
                    </Link>
                ) : null}
                <button className="btn btn-primary">
                  <Link href={product.url}>
                    Buy Now{" "}
                    {!product.price.includes("None")
                      ? "for " + product.price
                      : null}
                  </Link>
                </button>



          </div>
        </div>
    </div>
  );
}
