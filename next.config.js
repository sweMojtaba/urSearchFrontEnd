/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.w3schools.com',
                port: "",
                pathname: "/howto/img*"
            }
        ],
    }, 
    rewrites: () => {
        return [
            {
                source: '/about', 
                destination: '/welcome/about'
            }
        ]
    }
}

module.exports = nextConfig
