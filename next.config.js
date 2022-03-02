/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      {
        source: '/takmir',
        destination: '/takmir/kelola-kegiatan',
        permanent: true,
      },
    ]
  },
  images: {
    domains: ['firebasestorage.googleapis.com']
  },
  reactStrictMode: true,
}
