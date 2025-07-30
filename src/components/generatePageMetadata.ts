import {PROFESSIONAL_YEARS} from "@/constants";

interface PageHeadProps {
  title?: string;
  description?: string;
  imagePath?: string;
  path: string;
}

export default function generatePageMetadata(
  {
    title = "Senior Full Stack Engineer",
    description = `Seasoned impact-driven engineer with over ${PROFESSIONAL_YEARS} years of experience, recently collaborating with SaaS startups on a B2B basis. Designed and built high-traffic solutions while leading system development for AI-driven and scraping-based e-commerce products across global, agile teams.`,
    imagePath = "/profile-picture.png",
    path
  }: PageHeadProps
) {
  const fullTitle = `Luca Matei | ${title}`;
  const fullImagePath = `https://lucamatei.eu${imagePath}`;
  return {
    metadataBase: new URL('https://lucamatei.eu'),
    alternates: {
      canonical: path,
    },
    title: fullTitle,
    description: description,
    openGraph: {
      url: path,
      siteName: 'Luca Matei | Senior Full Stack Engineer',
      images: fullImagePath,
      locale: 'en_US',
      type: 'website',
    }
  }
}
