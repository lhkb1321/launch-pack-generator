import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// 初始化 OpenAI 客户端
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// 定义请求体类型
interface GenerateRequest {
  productName: string;
  tagline: string;
  targetAudience: string;
  problemSolved: string;
  coreFeatures: string;
  websiteUrl?: string;
  tone: 'professional' | 'indie' | 'growth' | 'technical';
}

// 定义响应类型
interface GenerateResponse {
  success: boolean;
  data?: {
    productHunt: string;
    reddit: string;
    twitter: string;
    linkedin: string;
    landingPage: string;
    githubReadme: string;
  };
  error?: string;
}

/**
 * POST /api/generate
 * 接收产品信息，生成完整的营销文案包
 */
export async function POST(request: NextRequest): Promise<NextResponse<GenerateResponse>> {
  try {
    // 解析请求体
    const body: GenerateRequest = await request.json();

    // 验证必填字段
    const requiredFields = ['productName', 'tagline', 'targetAudience', 'problemSolved', 'coreFeatures', 'tone'];
    for (const field of requiredFields) {
      if (!body[field as keyof GenerateRequest]) {
        return NextResponse.json(
          { success: false, error: `缺少必填字段：${field}` },
          { status: 400 }
        );
      }
    }

    // 构建 Prompt
    const prompt = buildPrompt(body);

    // 调用 OpenAI API 生成内容
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: '你是一个专业的产品营销专家，擅长为科技产品创建高质量的营销文案。你的任务是生成完整的产品发布包，包括 Product Hunt 帖子、Reddit 推广、社交媒体文案等。',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 4000,
    });

    // 解析生成的内容
    const generatedContent = completion.choices[0].message.content || '';
    const parsedContent = parseGeneratedContent(generatedContent);

    // 返回成功响应
    return NextResponse.json({
      success: true,
      data: parsedContent,
    });
  } catch (error) {
    console.error('API 生成错误:', error);
    
    // 处理 OpenAI API 错误
    if (error instanceof OpenAI.APIError) {
      return NextResponse.json(
        { success: false, error: `OpenAI API 错误：${error.message}` },
        { status: 500 }
      );
    }

    // 处理 JSON 解析错误
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { success: false, error: '无效的请求格式' },
        { status: 400 }
      );
    }

    // 其他错误
    return NextResponse.json(
      { success: false, error: '生成失败，请稍后重试' },
      { status: 500 }
    );
  }
}

/**
 * 构建 Prompt
 */
function buildPrompt(body: GenerateRequest): string {
  const { productName, tagline, targetAudience, problemSolved, coreFeatures, websiteUrl, tone } = body;

  const toneInstructions: Record<string, string> = {
    professional: '使用专业、正式的语气，适合企业级产品和 B2B 场景。',
    indie: '使用个人创业者、亲切的语气，突出独立开发的故事性。',
    growth: '使用增长导向、数据驱动的语气，强调转化和增长指标。',
    technical: '使用技术极客、开发者友好的语气，突出技术细节和创新点。',
  };

  return `请为以下产品生成完整的营销文案包：

## 产品信息
- **产品名称**: ${productName}
- **一句话介绍**: ${tagline}
- **目标用户**: ${targetAudience}
- **解决的问题**: ${problemSolved}
- **核心功能**: ${coreFeatures}
${websiteUrl ? `- **官网链接**: ${websiteUrl}` : ''}

## 语气风格
${toneInstructions[tone]}

## 生成要求
请生成以下内容，使用明确的标题分隔每个部分：

### 1. Product Hunt 帖子
- 标题（不超过 60 字符）
- 副标题（不超过 120 字符）
- 详细介绍（300-500 字，包含：问题背景、解决方案、核心功能、创始人故事、呼吁行动）
- 标签（3-5 个）

### 2. Reddit 推广文案（适合 r/entrepreneur、r/SaaS、r/startups）
- 标题（吸引眼球，不超过 100 字符）
- 正文（500-800 字，真诚分享创业历程，避免硬广）
- 评论互动建议（3-5 个可能的 Q&A）

### 3. Twitter 推文（5 条推文组成的 Thread）
- 每条推文不超过 280 字符
- 包含表情符号和话题标签
- 第 1 条：吸引注意力的开场
- 第 2-4 条：核心功能展示
- 第 5 条：呼吁行动 + 链接

### 4. LinkedIn 专业文案
- 标题（专业、引人深思）
- 正文（300-500 字，适合职场专业人士阅读）
- 话题标签（5-8 个）

### 5. 落地页 HTML 结构（仅内容，不含 CSS）
- Hero 区域（标题、副标题、CTA 按钮）
- 功能展示区（3-4 个核心功能）
- 社会证明区（用户评价、数据指标）
- 定价区（三档定价）
- FAQ 区（5 个常见问题）
- 页脚（版权信息、链接）

### 6. GitHub README
- 项目简介
- 功能特性列表
- 快速开始指南
- 技术栈说明
- 贡献指南
- License 信息

请确保每个部分内容完整、格式清晰，使用 Markdown 格式输出。`;
}

/**
 * 解析生成的内容
 */
function parseGeneratedContent(content: string): {
  productHunt: string;
  reddit: string;
  twitter: string;
  linkedin: string;
  landingPage: string;
  githubReadme: string;
} {
  // 简单的解析逻辑，实际项目中可以使用更复杂的解析
  const sections = content.split('###');
  
  return {
    productHunt: sections.find(s => s.includes('Product Hunt')) || content,
    reddit: sections.find(s => s.includes('Reddit')) || content,
    twitter: 











































































































































































