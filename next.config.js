/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    MONGO_URI : "mongodb+srv://aydinsanoz1976:090519Ay@cluster0.377duaw.mongodb.net/?retryWrites=true&w=majority"
  }
}

module.exports = nextConfig
