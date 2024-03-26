/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "www.naraleao.com.br",
                port: "",
                pathname: "/_imgs/galeria/fotos/**"
            },
            {
                protocol: "http",
                hostname: "www.naraleao.com.br",
                port: "",
                pathname: "/_imgs/documentos/**"
            },
        ]
    }
};

export default nextConfig;
