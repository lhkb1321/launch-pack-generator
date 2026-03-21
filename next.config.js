/** @type {import('next').NextConfig} */
const nextConfig = {
  // 启用 React Strict Mode
  reactStrictMode: true,

  // 配置路径别名
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': __dirname,
    };
    return config;
  },

  // 生产环境优化
  productionBrowserSourceMaps: false,

  // 图片域名配置（如需使用外部图片）
  images: {
    domains: [],
    remotePatterns: [],
  },

  // 边缘函数配置（可选）
  // experimental: {
  //   serverActions: {
  //     bodySizeLimit: '2mb',
  //   },
  // },
};

module.exports = nextConfig;

























