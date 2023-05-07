import reviewsData from "@/data/review_data.json"
import siteData from "@/data/site_data.json"
import guideData from "@/data/sc_data.json"


function generateSiteMap(posts) {
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <!--We manually set the two URLs we know already-->
    <url>
        <loc>${siteData.url}</loc>
    </url>
    <url>
        <loc>${siteData.url}/guides</loc>
    </url>
       <url>
        <loc>${siteData.url}/reviews</loc>
    </url>
    ${posts
        .map((p) => {
            return `
    <url>
        <loc>${`${siteData.url}/${p.slug}`}</loc>
    </url>
    `;
        })
        .join('')}
</urlset>
        `;
}

function SitemapXml() {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({res}) {
    // We make an API call to gather the URLs for our site

    const posts =  reviewsData.posts.concat(guideData.posts);

    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap(posts);

    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default SitemapXml;