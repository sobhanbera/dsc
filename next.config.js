module.exports = {
    reactStrictMode: true,
    images: {
        domains: ['res.cloudinary.com', '**'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
}
