/** @type {import('next').NextConfig} */
const nextConfig = {
   typescript: {
      ignoreBuildErrors:true
   }
   ,
   eslint:{
      ignoreDuringBuilds:true
   },
  images: {
    domains: ["flowbite.s3.amazonaws.com", 'images.unsplash.com'],
  },
};

export default nextConfig;
