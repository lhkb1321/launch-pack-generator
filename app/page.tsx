import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AI 出海 Launch Pack 生成器
          </h1>h1>
          <p className="text-xl text-gray-600 mb-8">
            帮助独立开发者快速生成产品发布和推广所需的一整套文案资产包
          </p>p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/generator"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              立即生成
            </Link>Link>
            <Link
              href="#features"
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
            >
              了解更多
            </Link>Link>
          </div>div>
        </div>div>
      </section>section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">功能特性</h2>h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">🎯 Product Hunt 文案</h3>h3>
            <p className="text-gray-600">
              严格符合 60 字符规范的 tagline，提升产品曝光率
            </p>p>
          </div>div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">📝 GitHub README</h3>h3>
            <p className="text-gray-600">
              完整的项目文档模板，一键复制使用
            </p>p>
          </div>div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">🌐 落地页 HTML</h3>h3>
            <p className="text-gray-600">
              基于 Tailwind CSS 的单页模板，文案自动填充
            </p>p>
          </div>div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">💬 Reddit 发帖模板</h3>h3>
            <p className="text-gray-600">
              第一人称口吻，含推荐 Subreddit 列表
            </p>p>
          </div>div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">🐦 X/Twitter 推文</h3>h3>
            <p className="text-gray-600">
              符合 280 字符规范的冷启动推文模板
            </p>p>
          </div>div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">💼 LinkedIn 文案</h3>h3>
            <p className="text-gray-600">
              专业风格的职场推广文案
            </p>p>
          </div>div>
        </div>div>
      </section>section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">定价方案</h2>h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md border">
            <h3 className="text-2xl font-bold mb-2">免费引流版</h3>h3>
            <p className="text-4xl font-bold text-blue-600 mb-6">$0</p>p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">✓ Hero 标题 + 副标题</li>li>
              <li className="flex items-center">✓ 3 条 X 推文</li>li>
              <li className="flex items-center">✓ 官网 Meta description</li>li>
            </ul>ul>
            <Link
              href="/generator"
              className="block text-center bg-gray-100 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              免费使用
            </Link>Link>
          </div>div>
          <div className="bg-white p-8 rounded-lg shadow-md border-2 border-blue-600">
            <div className="text-blue-600 font-semibold mb-2">最受欢迎</div>div>
            <h3 className="text-2xl font-bold mb-2">标准包</h3>h3>
            <p className="text-4xl font-bold text-blue-600 mb-6">$14.90</p>p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">✓ Product Hunt tagline + description</li>li>
              <li className="flex items-center">✓ Hacker News 提交文案</li>li>
              <li className="flex items-center">✓ Reddit 发帖模板 ×2</li>li>
              <li className="flex items-center">✓ LinkedIn 文案</li>li>
              <li className="flex items-center">✓ FAQ ×5</li>li>
            </ul>ul>
            <Link
              href="/generator"
              className="block text-center bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              立即购买
            </Link>Link>
          </div>div>
          <div className="bg-white p-8 rounded-lg shadow-md border">
            <h3 className="text-2xl font-bold mb-2">终极包</h3>h3>
            <p className="text-4xl font-bold text-blue-600 mb-6">$29.90</p>p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">✓ 标准包全部内容</li>li>
              <li className="flex items-center">✓ GitHub README.md 代码</li>li>
              <li className="flex items-center">✓ Landing Page HTML</li>li>
              <li className="flex items-center">✓ 30 秒产品介绍脚本</li>li>
              <li cla</main>


