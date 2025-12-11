/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    // images: {
    //     domains: ["fakestoreapi.com"]
    // }
    images: {
        remotePatterns: [
            {
                hostname: 'fakestoreapi.com',
            },
        ],
    }
};

export default nextConfig;
