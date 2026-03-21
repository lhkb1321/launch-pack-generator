# 🚀 AI 出海 Launch Pack 生成器

> 帮助独立开发者快速生成产品发布和推广所需的一整套文案资产包

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![Stripe](https://img.shields.io/badge/Stripe-Payments-635bff?logo=stripe)](https://stripe.com/)

## 📖 产品概述

**AI 出海 Launch Pack 生成器** 是一个专为独立开发者、AI 工具站创作者和小型 SaaS 团队设计的文案生成工具。它基于 AI 技术，能够快速生成符合各平台规范的产品发布文案，包括：

- ✅ Product Hunt tagline（严格 60 字符内）
- ✅ GitHub README.md 代码
- ✅ Tailwind CSS 单页落地页 HTML
- ✅ Reddit 社区偏好的第一人称发帖模板
- ✅ X/Twitter 推文（280 字符规范）
- ✅ Hacker News 提交文案
- ✅ LinkedIn 专业风格文案

## 🎯 核心价值主张

> "我不是买了个 AI 玩具，而是买了'上线物料'"

用户获得的不是简单的文本生成，而是**立即可用的发布资产包**，节省 5+ 小时手动排版时间。

## ✨ 功能特性

### 免费引流版（$0）
- Hero 标题 + 副标题
- 3 条 X 推文
- 官网 Meta description

### 标准包（$14.90）
- Product Hunt tagline + description
- Hacker News 提交文案
- Reddit 发帖模板 ×2（含推荐 Subreddit）
- LinkedIn 文案
- FAQ ×5

### 终极包（$29.90）
- 标准包全部内容
- GitHub README.md（完整 Markdown 代码）
- Landing Page HTML（基于 Tailwind CSS）
- 30 秒产品介绍视频脚本
- 冷启动 outreach 文案
- 更新日志模板

## 🛠️ 技术栈

| 层级 | 技术 | 说明 |
|------|------|------|
| 前端 | Next.js 14 | SSG/边缘渲染 |
| UI 库 | shadcn/ui | 极简专业感 |
| 后端 | Next.js API Routes | 轻量级 API |
| 数据库 | SQLite | 本地存储 |
| 支付 | Stripe Payment Links | 单次购买流程 |
| AI | OpenAI API / Claude API | 第三方 API 调用 |
| 部署 | Cloudflare Pages + VPS | 前端静态化 |

## 🚀 快速开始

### 环境要求
- Node.js 18+
- npm / yarn / pnpm
- OpenAI API Key 或 Claude API Key
- Stripe 账号（用于支付）

### 本地开发

```bash
# 克隆项目
git clone https://github.com/lhkb1321/launch-pack-generator.git
cd launch-pack-generator

# 安装依赖
npm install

# 复制环境变量文件
cp .env.example .env.local

# 配置环境变量（编辑 .env.local）
# OPENAI_API_KEY=your_api_key
# STRIPE_SECRET_KEY=your_stripe_key

# 启动开发服务器
npm run dev

# 访问 http://localhost:3000
```

### 生产部署

```bash
# 构建项目
npm run build

# 启动生产服务器
npm start
```

## 📁 项目结构

```
launch-pack-generator/
├── app/                    # Next.js 14 App Router
│   ├── api/               # API 路由
│   │   ├── generate/      # 文案生成接口
│   │   └── webhook/       # Stripe webhook
│   ├── page.tsx           # 首页
│   ├── generator/         # 生成器页面
│   └── layout.tsx         # 根布局
├── components/            # React 组件
│   ├── ui/               # shadcn/ui 组件
│   ├── forms/            # 表单组件
│   └── results/          # 结果展示组件
├── lib/                  # 工具函数
│   ├── prompts.ts        # Prompt 模板
│   ├── stripe.ts         # Stripe 配置
│   └── db.ts             # 数据库连接
├── prisma/               # 数据库 Schema
├── public/               # 静态资源
└── .env.example          # 环境变量示例
```

## 💰 商业模式

采用**买断制**而非订阅制：
- 低频需求，无订阅压力
- 单次付费，转化率高
- 维护成本低

**收入预测**（保守估计）：
- 月访问量 5,000
- 转化率 3%
- 月收入 $2,000+

## 📈 开发路线图

- [x] 创建 GitHub 仓库
- [ ] 初始化 Next.js 项目 + shadcn/ui
- [ ] 实现输入表单页面
- [ ] 实现 Prompt 链生成功能
- [ ] 集成 Stripe 支付
- [ ] 部署上线

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 📬 联系方式

- GitHub: [@lhkb1321](https://github.com/lhkb1321)
- 项目地址: [https://github.com/lhkb1321/launch-pack-generator](https://github.com/lhkb1321/launch-pack-generator)

---

**Made with ❤️ for Indie Hackers**




























































































































