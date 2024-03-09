/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "www.naraleao.com.br",
                port: "",
                pathname: "/_imgs/galeria/fotos/**"
            }
        ]
    }
};

export default nextConfig;
