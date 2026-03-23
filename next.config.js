/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  async generateStaticParams() {
    return [
      { slug: 'marbella' },
      { slug: 'malaga' },
      { slug: 'estepona' },
      { slug: 'fuengirola' },
    ];
  },
};

module.exports = nextConfig;
