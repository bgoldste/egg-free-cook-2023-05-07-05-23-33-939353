import guideData from "@/data/sc_data.json";
import reviewData from "@/data/review_data.json";
import Link from "next/link";
const guides = guideData.posts;
const posts = reviewData.posts;
const combinedData = posts.concat(guides);

const paths = combinedData.map((post) => ({
  params: { slug: post.slug, data: "hello" },
}));

const Footer = () => {
  return (
    <footer className="footer p-10 bg-secondary text-secondary-content">
      <div>
        <span className="footer-title">Reviews</span>
        {posts.map((p) => (
          <Link key={p.slug} href={`/${p.slug}`} className="link link-hover">
            {p.title}
          </Link>
        ))}

        {/*<a className="link link-hover">Design</a>*/}
        {/*<a className="link link-hover">Marketing</a>*/}
        {/*<a className="link link-hover">Advertisement</a>*/}
      </div>
      <div>
        <span className="footer-title">Guides</span>
        {guides.map((g) => (
          <Link key={g.slug} href={`/${g.slug}`} className="link link-hover">
            {g.title}
          </Link>
        ))}
      </div>
      <div>
        <span className="footer-title">About</span>
        <Link href="/" className="link link-hover">
          Terms of use
        </Link>
        <Link href="/" className="link link-hover">
          Privacy policy
        </Link>
        <Link href="/" className="link link-hover">
          Cookie policy
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
