import reviewData from "../data/review_data.json";
import siteData from "../data/site_data.json";
import guideData from "../data/sc_data.json";
import Link from "next/link";
import Search from "@/components/Search"
const Navbar = () => {
  const reviews = reviewData.posts;
  const guides = guideData.posts;
  const siteNameLength = siteData.name.split(" ").length;
  console.log(guides);
  return (

      <div className="navbar bg-primary sticky text-primary-content p-4  top-0 z-50">


          <div className="navbar-start ">

              <Link href="/"className="btn-md   btn-ghost self-end  text-lg text-primary-content break-words px-0 mx-0 align-e"> { siteData.name.split(" ").slice(0, siteNameLength-1).join(" ") }  <span className={"text-secondary italic"}>{ siteData.name.split(" ")[siteNameLength-1] } </span></Link>
          </div>
          <div className="navbar-end">
                {/*<Search />*/}
              <div className="dropdown dropdown-end">
                  <Link href="/search" className="btn btn-small border-primary-content btn-ghost">Search</Link>
              </div>
              <div className="dropdown dropdown-end">

                  <label tabIndex={0} className="btn btn-ghost  ">
                      {/*<svg width="64px" height="64px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#000000" fill-rule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"></path> </g></svg>*/}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5  fill-primary stroke-accent" stroke-width='1.3'  viewBox="0 0 20 20"  ><g id="SVGRepo_iconCarrier"> <path fill="" className= "" fill-rule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"></path> </g></svg>
                      {/*className="h-5 w-5 stroke-current" fill="none" viewBox="0 0 64 64"  stroke-width="2"*/}
                  </label>
                  {/*<label tabIndex={0} className="btn btn-ghost rounded-btn">Dropdown</label>*/}
                  <ul tabIndex={0} className="menu dropdown-content    bg-primary-content text-primary  shadow bg-base-100 rounded-box mx-auto w-72 mt-4 p-0">
                      {/*<ul className="p-2 bg-base-100">*/}

                      <Link href={'/reviews'}>
                          <li className="menu-title">
                          <span>Reviews</span>
                      </li>
                      </Link>
                        {reviews.slice(0,3).map((guide) => (
                          <li key={guide.id}>
                            <a href={`/${guide.slug}`}>{guide.title.slice(0, 75)}</a>
                          </li>
                        ))}
                      <Link href={'/guides'}>
                      <li className="menu-title">
                          <span>Guides</span>
                      </li>
                      </Link>
                      {guides.slice(0,3).map((guide) => (
                          <li key={guide.id}>
                              <a href={`/${guide.slug}`}>{guide.title.slice(0, 75)}</a>
                          </li>
                      ))}
                      <li className="menu-title">
                          <span>About</span>
                      </li>

                          <li key="99999">
                              <a href={`/about`}>About</a>
                          </li>

                      </ul>
              </div>
          </div>
      </div>
  )


};

export default Navbar;

//
//
//
// return (
//     <div className="navbar  bg-primary">
//         <div className="navbar-start">
//             <div className="flex-1">
//                 <Link href="/" className="btn btn-ghost normal-case text-lg">
//                     {siteData.name}
//                 </Link>
//             </div>
//         </div>
//
//         <div className="navbar-center lg:flex">
//             <ul className="menu menu-horizontal px-1">
//                 {/*<li><a>Item 1</a></li>*/}
//                 <li tabIndex={0}>
//                     <Link href="/reviews">
//                         Reviews
//                         <svg
//                             className="fill-current"
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="20"
//                             height="20"
//                             viewBox="0 0 24 24"
//                         >
//                             <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
//                         </svg>
//                     </Link>
//                     <ul className="p-2 bg-base-100">
//                         {reviews.slice(0, 5).map((review) => (
//                             <li key={review.id}>
//                                 <a href={`/${review.slug}`}>{review.title.slice(0, 75)}</a>
//                             </li>
//                         ))}
//                     </ul>
//                 </li>
//
//                 <li tabIndex={1}>
//                     <Link href="/guides">
//                         Guides
//                         {/*<svg*/}
//                         {/*  className="fill-current"*/}
//                         {/*  xmlns="http://www.w3.org/2000/svg"*/}
//                         {/*  width="20"*/}
//                         {/*  height="20"*/}
//                         {/*  viewBox="0 0 24 24"*/}
//                         {/*>*/}
//                         {/*  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />*/}
//                         {/*</svg>*/}
//                     </Link>
//                     {/*<ul className="p-2 bg-base-100">*/}
//                     {/*  {guides.map((guide) => (*/}
//                     {/*    <li key={guide.id}>*/}
//                     {/*      <a href={`/${guide.slug}`}>{guide.title.slice(0, 75)}</a>*/}
//                     {/*    </li>*/}
//                     {/*  ))}*/}
//                     {/*</ul>*/}
//                 </li>
//                 <li tabIndex={2}>
//                     <Link href="/about">
//                         Guides
//                     </Link>
//                 </li>
//             </ul>
//         </div>
//     </div>
// );