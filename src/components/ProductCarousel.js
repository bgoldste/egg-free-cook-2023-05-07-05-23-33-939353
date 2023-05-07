import ProductLink from "@/components/ProductLink";
import Image from "next/image";
import Link from "next/link";
export default function ProductBank({ products }) {
    return (
<>
        <div className="carousel w-full">
            {products.map((p, i) =>
            <Link href={p.product.url} id={p.product.id} key={p.product.id} className="carousel-item w-full grid ">

                <Image
                    src={p.product.thumbnail}
                    alt={p.product.name}
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-80 w-80  "
                ></Image>
                <div
                    className="p-1">
                    <p className="text-sm break-all">{p.product.name}</p>

                </div>


            </Link>
                )}

        </div>
    <div className="flex justify-center w-full py-2 gap-2">
        {products.map((p, i) =>
        <a href={`#${p.product.id}`} key={p.product.id} className="btn btn-xs">{i+1}</a>
            )}
    </div>
</>

    )
};

//
// <div className="carousel w-full">
//
//     {products.map((p) =>
//
//         <div id="slide1" className="carousel-item relative w-full">
//             <h1>asdf</h1>
//
//         </div>
//
//     )}
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//         <a href="#slide4" className="btn btn-circle">❮</a>
//         <a href="#slide2" className="btn btn-circle">❯</a>
//     </div>
//
//
//
// </div>