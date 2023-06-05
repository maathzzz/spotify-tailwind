/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
          {
            source: '/spotify-logo.svg',
            headers: [
              {
                key: 'Content-Type',
                value: 'image/x-icon',
              },
            ],
          },
        ];
      },
}

module.exports = nextConfig
