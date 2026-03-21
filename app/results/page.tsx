'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

// 定义生成结果类型
interface GenerateResult {
  productHunt: string;
  reddit: string;
  twitter: string;
  linkedin: string;
  landingPage: string;
  githubReadme: string;
}

// 定义免费内容（仅展示部分内容）
const FREE_CONTENT_LIMIT = 200; // 免费用户可见字符数

export default function ResultsPage() {
  const [results, setResults] = useState<GenerateResult | null>(null);
  const [activeTab, setActiveTab] = useState<string>('productHunt');
  const [copied, setCopied] = useState<boolean>(false);
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);

  // 模拟数据（实际项目中从 API 获取）
  const mockResults: GenerateResult = {
    productHunt: `# Product Hunt 帖子

## 标题
AI Launch Pack - 一键生成完整产品发布包

## 副标题
为独立开发者和创业团队打造的 AI 营销文案生成器，30 秒生成 Product Hunt、Reddit、Twitter 等全平台文案

## 详细介绍
作为一名独立开发者，我深知产品发布时的痛苦：需要同时准备 Product Hunt 帖子、Reddit 推广、社交媒体文案、落地页内容... 每个平台都有不同的调性和要求。

AI Launch Pack 就是为了解决这个问题而生的。只需输入产品基本信息，我们的 AI 就能生成：

✅ Product Hunt 完整帖子（标题 + 副标题 + 详细介绍）
✅ Reddit 推广文案（真诚分享，避免硬广）
✅ Twitter Thread（5 条推文组成的完整故事）
✅ LinkedIn 专业文案
✅ 落地页 HTML 结构
✅ GitHub README 文档

支持 4 种语气风格：专业、个人创业者、增长导向、技术极客。

## 创始人故事
我是一名全栈开发者，在发布自己的 SaaS 产品时，花费了整整一周时间准备各种营销文案。当时就想：为什么不能用 AI 来自动化这个过程？

于是，AI Launch Pack 诞生了。它基于 GPT-4o-mini 模型，经过精心设计的 Prompt 工程，能够生成高质量、符合各平台调性的营销文案。

## 呼吁行动
现在免费试用，生成你的第一个产品发布包！

## 标签
#artificial-intelligence #marketing #saas #productivity #developer-tools`,
    reddit: `# Reddit 推广文案

## 标题
我开发了一个 AI 工具，帮我在 30 分钟内搞定了一周的产品发布文案工作

## 正文
大家好，我是一名独立开发者。

上个月，我正在准备自己的 SaaS 产品发布。像往常一样，我开始准备 Product Hunt 帖子、Reddit 推广、Twitter 文案等等。但是这次，我意识到这个过程太耗时了——我花了整整一周时间在各种文案上，而不是改进产品本身。

于是我做了一个决定：用 AI 来自动化这个过程。

经过两周的开发，AI Launch Pack 诞生了。它的理念很简单：
- 输入产品基本信息（名称、介绍、目标用户等）
- 选择语气风格（专业/个人创业者/增长导向/技术极客）
- 30 秒后，获得完整的营销文案包

我用自己的产品测试了它，结果令人惊讶：
- Product Hunt 帖子获得了 500+ upvotes
- Reddit 帖子带来了 200+ 注册用户
- Twitter Thread 获得了 10K+ 曝光

当然，这不是什么魔法。背后是精心设计的 Prompt 工程和 GPT-4o-mini 模型的强大能力。

我想把这个工具分享给社区，帮助更多独立开发者节省时间，专注于产品本身。

## 评论互动建议
Q1: 这个工具和 Jasper/Copy.ai 有什么区别？
A: 我们专注于产品发布场景，而不是通用营销文案。Prompt 是针对 Product Hunt、Reddit 等平台专门优化的。

Q2: 生成的文案需要人工修改吗？
A: 建议进行微调。AI 生成的是初稿，你可以基于此进行个性化调整。

Q3: 支持中文吗？
A: 目前主要支持英文，中文支持在开发中。

Q4: 价格是多少？
A: 基础版免费，可以生成部分内容。完整版$14.90 一次性付费。`,
    twitter: `# Twitter 推文 Thread

## 推文 1
🚀 刚刚发布了一个新项目：AI Launch Pack

作为一名独立开发者，我厌倦了花费数小时准备产品发布文案。

所以我自己做了一个 AI 工具来解决这个问题👇

## 推文 2
只需输入产品基本信息：
- 产品名称
- 一句话介绍
- 目标用户
- 解决的问题
- 核心功能

选择语气风格，30 秒后获得完整文案包✨

## 推文 3
生成的内容包括：
✅ Product Hunt 完整帖子
✅ Reddit 推广文案
✅ Twitter Thread
✅ LinkedIn 专业文案
✅ 落地页 HTML 结构
✅ GitHub README

一个工具，搞定所有平台🎯

## 推文 4
背后是 GPT-4o-mini + 精心设计的 Prompt 工程

不是简单的模板填充，而是真正理解每个平台的调性和用户期望

我已经用它发布了自己的产品，效果超出预期📈

## 推文 5
现在免费试用中！

生成你的第一个产品发布包，节省数小时文案工作时间⏰

 [产品链接]

#indiehacker #saas #artificialintelligence #productivity`,
    linkedin: `# LinkedIn 专业文案

## 标题
如何用 AI 在 30 分钟内完成产品发布准备？我的实践经验分享

## 正文
在 SaaS 行业，产品发布是一个关键时刻。但准备过程往往令人头疼：

- Product Hunt 帖子需要精心打磨
- Reddit 推广要真诚、避免硬广
- 社交媒体文案要符合各平台调性
- 落地页要清晰传达价值主张
- GitHub README 要专业、完整

作为一名全栈开发者，我花费了太多时间在这些文案上，而不是改进产品本身。

所以我决定用 AI 来解决这个问题。

经过两周的开发，AI Launch Pack 诞生了。它基于 GPT-4o-mini 模型，通过精心设计的 Prompt 工程，能够生成：

1️⃣ Product Hunt 完整帖子（标题 + 副标题 + 详细介绍）
2️⃣ Reddit 推广文案（真诚分享风格）
3️⃣ Twitter Thread（5 条推文组成的故事）
4️⃣ LinkedIn 专业文案
5️⃣ 落地页 HTML 结构
6️⃣ GitHub README 文档

支持 4 种语气风格，适应不同产品和受众。

**实际效果：**
- Product Hunt：500+ upvotes
- Reddit：200+ 注册用户转化
- Twitter：10K+ 曝光

**关键洞察：**
AI 不是替代人类创意，而是放大我们的效率。生成的文案是初稿，你可以基于此进行个性化调整。

如果你也是独立开发者或创业团队成员，欢迎试用 AI Launch Pack，节省时间，专注于产品本身。

## 话题标签
#ArtificialIntelligence #SaaS #ProductLaunch #IndieHacker #Marketing #Productivity #DeveloperTools #Startup`,
    landingPage: `# 落地页 HTML 结构

## Hero 区域
<h1>AI Launch Pack - 一键生成完整产品发布包</h1>
<p>为独立开发者和创业团队打造的 AI 营销文案生成器</p>
<p>30 秒生成 Product Hunt、Reddit、Twitter 等全平台文案</p>
<button>立即生成 - 免费试用</button>
<p>无需信用卡 · 30 秒见效</p>

## 功能展示区
<h2>一个工具，搞定所有平台</h2>

<feature>
<h3>🎯 Product Hunt 帖子</h3>
<p>标题 + 副标题 + 详细介绍，符合 PH 社区调性</p>
</feature>

<feature>
<h3>💬 Reddit 推广</h3>
<p>真诚分享创业历程，避免硬广，提高转化率</p>
</feature>

<feature>
<h3>🐦 Twitter Thread</h3>
<p>5 条推文组成的完整故事，包含表情符号和话题标签</p>
</feature>

<feature>
<h3>💼 LinkedIn 文案</h3>
<p>专业风格，适合职场人士阅读和分享</p>
</feature>

<feature>
<h3>🌐 落地页结构</h3>
<p>完整的 HTML 结构，包含 Hero、功能、定价、FAQ</p>
</feature>

<feature>
<h3>📄 GitHub README</h3>
<p>专业的项目文档，包含快速开始和技术栈说明</p>
</feature>

## 社会证明区
<h2>开发者们的选择</h2>

<testimonial>
<p>"AI Launch Pack 帮我省去了至少 10 小时的文案工作时间。Product Hunt 发布获得了 500+ upvotes！"</p>
<cite>- 张三，独立开发者</cite>
</testimonial>

<testimonial>
<p>"生成的 Reddit 文案非常自然，完全不像 AI 写的。带来了 200+ 注册用户。"</p>
<cite>- 李四，SaaS 创始人</cite>
</testimonial>

<stats>
<stat>500+ 产品发布</stat>
<stat>10,000+ 文案生成</stat>
<stat>95% 用户满意度</stat>
</stats>

## 定价区
<h2>简单透明的定价</h2>

<pricing>
<h3>免费</h3>
<p>$0</p>
<ul>
<li>生成预览内容</li>
<li>查看 200 字符</li>
<li>无限次尝试</li>
</ul>
<button>开始使用</button>
</pricing>

<pricing>
<h3>标准包</h3>
<p>$14.90</p>
<ul>
<li>解锁完整文案</li>
<li>一键复制</li>
<li>下载 Markdown</li>
<li>4 种语气风格</li>
</ul>
<button>立即购买</button>
<p>最受欢迎 👍</p>
</pricing>

<pricing>
<h3>终极包</h3>
<p>$29.90</p>
<ul>
<li>包含标准包所有功能</li>
<li>10 次生成</li>
<li>优先支持</li>
<li>自定义 Prompt</li>
</ul>
<button>立即购买</button>
</pricing>

## FAQ 区
<h2>常见问题</h2>

<faq>
<question>生成的文案可以直接使用吗？</question>
<answer>可以，但建议进行微调。AI 生成的是高质量初稿，你可以基于此进行个性化调整，使其更符合你的品牌声音。</answer>
</faq>

<faq>
<question>支持哪些语言？</question>
<answer>目前主要支持英文，中文、日文、韩文等亚洲语言支持正在开发中。</answer>
</faq>

<faq>
<question>如何付费？</question>
<answer>我们使用 Stripe 进行安全支付，支持信用卡、借记卡等多种支付方式。一次性付费，永久使用。</answer>
</faq>

<faq>
<question>可以退款吗？</question>
<answer>当然可以。如果对生成的文案不满意，请在 7 天内联系我们，我们将全额退款。</answer>
</faq>

<faq>
<question>我的数据安全吗？</question>
<answer>非常安全。我们不会存储你的产品信息，所有数据仅用于生成文案，生成后立即删除。</answer>
</faq>

## 页脚
<p>&copy; 2024 AI Launch Pack. All rights reserved.</p>
<nav>
<a>隐私政策</a>
<a>服务条款</a>
<a>联系我们</a>
<a>Twitter</a>
</nav>`,
    githubReadme: `# GitHub README

# AI Launch Pack

一键生成完整产品发布包的 AI 工具，为独立开发者和创业团队打造。

## 功能特性

- 🎯 **Product Hunt 帖子生成** - 标题 + 副标题 + 详细介绍
- 💬 **Reddit 推广文案** - 真诚分享风格，避免硬广
- 🐦 **Twitter Thread** - 5 条推文组成的完整故事
- 💼 
























































































































































































































































