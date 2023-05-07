import ProductLink from "@/components/ProductLink";
export default function ProductBank({ products }) {
  console.log(products);
  return (
    <div className="bg-primary-content/20 py-2">
      <h2 className="text-center text-3xl p-2">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-2">
      {products.map((p) => (
        <ProductLink key={p.product.id} product={p.product} />
      ))}
    </div>
    </div>
  );
}
