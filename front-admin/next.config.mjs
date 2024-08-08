/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    loader: "akamai",
    path: "/",
    unoptimized: true,
  },
  compiler: {
    removeConsole: process.env.NEXT_PUBLIC_NODE_ENV === "pro",
  },
};

export default nextConfig;
