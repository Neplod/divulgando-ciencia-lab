import siteData from "../data/siteData.json"
//import { slugify } from "./utils";


export default function jsonLDGenerator({ type, post, url }) {
    if (type === 'post') {
        return `<script type="application/ld+json">
            {
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "${url}"
                },
                "headline": "${post.titulo}",
                "description": "${post.description}",
                "image": "${post.portada}",
                "datePublished": "${post.fechaOrdenar}",
                "author": {
                    "@type": "Person",
                    "name": "${post.autor}",
                }
            }
        </script>`;
    }
    return `<script type="application/ld+json">
            {
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "${siteData.title}",
            "url": "${import.meta.env.SITE}"
            }
        </script>`;
}