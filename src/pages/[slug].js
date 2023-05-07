import reviewData from "../data/review_data.json";
import guideData from "../data/sc_data.json";
import Navbar from "../components/Navbar";
import SupportingContent from "../components/SupportingContent";
import Layout from "@/components/Layout";
import Review from "@/components/Review";
export async function getStaticPaths() {
  const guides = guideData.posts;
  const posts = reviewData.posts;
  const combinedData = posts.concat(guides);

  const paths = combinedData.map((post) => ({
    params: { slug: post.slug, data: "hello" },
  }));

  // console.log(posts)
  // console.log("asdfasdf", paths)
  // debugger;
  // const paths =
  return {
    // paths: [{ params: { slug: '1' } }, { params: { slug: '2' } }],
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
  const guides = guideData.posts;
  const posts = reviewData.posts;
  const combinedData = posts.concat(guides);

  const slug = context.params.slug;

  const post = combinedData.find((post) => post.slug === slug);
  // console.log(slug)
  // // console.log(posts)
  console.log("slug", slug, "post", post);

  return {
    // Passed to the page component as props
    props: { post: post },
  };
}

export default function Post({ post }) {
  return (
    // post.title)
    <Layout pageTitle={post.title} pageDescription={post.content.slice(0, 150)}>
      {post.type === "sc" ? (
        <SupportingContent post={post} />
      ) : (
        <Review post={post} />
      )}
    </Layout>
  );
}
//     </Layout>
//     <div>
//     <Navbar />
//         <div class="flow-root">
//             <article class="prose md:prose-md">
//                 <h1>{post.type} {post.title}</h1>
//                 {/*<img src={post.product.thumbnail} />*/}
//
//                {
//                     post.content.split('\n').map( (line) =>
//
//                         <p key={line.slice(0,10)}>{line}</p>
//
//
//
//                     )
//                 }
//             </article>
//             {/*<button class="btn btn-primary"><a href={post.product.url} target='blank'>Buy on Amazon for {post.product.price}</a></button>*/}
//
//         </div>
//     </div>
//     )
// }
