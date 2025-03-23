import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  }
};

const withMDX = createMDX({
  // Add Markdown plugins here, as desired
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
