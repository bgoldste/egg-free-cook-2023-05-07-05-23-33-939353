import ProductLink from "@/components/ProductLink";
import ContentCard from "@/components/ContentCard";
import guideData from "@/data/sc_data.json";
export default function RelatedContent({}) {
  const guides = guideData.posts.slice(0, 4);
  return (
    <div className="bg-primary p-4 ">
      <h2 className="primary-content text-center text-3xl">Related Content</h2>
        <ul className={"grid gap-4 px-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}>
      {guides.map((g) => (
        <ContentCard key={g.id} content={g} />
      ))}
        </ul>
    </div>
  );
}
