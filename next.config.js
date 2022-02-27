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
  reactStrictMode: true,
}
