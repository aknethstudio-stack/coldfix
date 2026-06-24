import { NextResponse } from "next/server";

export const dynamic = 'force-static';

const BUILD_DATE = new Date().toISOString().split('T')[0];

export async function GET() {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://serwispcktw.pl';
    const urls = [
        {
            loc: siteUrl,
            lastmod: BUILD_DATE,
            changefreq: 'monthly',
            priority: 1.0,
        },
        {
            loc: `${siteUrl}/about`,
            lastmod: BUILD_DATE,
            changefreq: 'yearly',
            priority: 0.7,
        },
        {
            loc: `${siteUrl}/services`,
            lastmod: BUILD_DATE,
            changefreq: 'yearly',
            priority: 0.8,
        },
        {
            loc: `${siteUrl}/contact`,
            lastmod: BUILD_DATE,
            changefreq: 'yearly',
            priority: 0.8,
        },
        {
            loc: `${siteUrl}/policies/privacy`,
            lastmod: '2026-07-01',
            changefreq: 'yearly',
            priority: 0.5,
        },
        {
            loc: `${siteUrl}/policies/rodo`,
            lastmod: '2026-07-01',
            changefreq: 'yearly',
            priority: 0.5,
        },
        {
            loc: `${siteUrl}/policies/terms`,
            lastmod: '2026-07-01',
            changefreq: 'yearly',
            priority: 0.5,
        },
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `<url>
  <loc>${url.loc}</loc>
  <lastmod>${url.lastmod}</lastmod>
  <changefreq>${url.changefreq}</changefreq>
  <priority>${url.priority}</priority>
</url>`
  )
  .join('\n')}
</urlset>`;

    return new NextResponse(xml,{
        headers: {
            'Content-Type': 'application/xml',
        },
    })
}