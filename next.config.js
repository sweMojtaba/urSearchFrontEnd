/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ["react-bootstrap"]
    }
}

module.exports = nextConfig
