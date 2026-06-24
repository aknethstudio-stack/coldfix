import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* tutaj możesz dodać opcje, np. reactStrictMode: true, output: 'export' itp. */
  reactStrictMode: true,
  // productionBrowserSourceMaps: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles'), path.join(__dirname, 'node_modules')],
  },
};

export default nextConfig;
