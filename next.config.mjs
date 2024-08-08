/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: '/api/subdomain/:path*',
            },
        ];
    },
};
export default nextConfig;
