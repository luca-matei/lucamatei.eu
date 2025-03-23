interface PageHeadProps {
  title?: string;
  description?: string;
  imagePath?: string;
  path: string;
}

export default function generatePageMetadata(
  {
    title = "Senior Full Stack Engineer",
    description = "Experienced impact-driven engineer specializing in B2B startup environments. Creator of open-source IaC tool, WSGI web framework, and utility-first CSS library.",
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
