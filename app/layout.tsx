import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI 出海 Launch Pack 生成器 - 帮助独立开发者快速生成产品发布文案",
  description: "帮助独立开发者快速生成产品发布和推广所需的一整套文案资产包，包括 Product Hunt tagline、GitHub README、Reddit 发帖模板、Twitter 推文等",
  keywords: ["AI 工具", "产品发布", "文案生成器", "独立开发者", "Product Hunt", "Launch Pack"],
  authors: [{ name: "lhkb1321" }],
  openGraph: {
    title: "AI 出海 Launch Pack 生成器",
    description: "帮助独立开发者快速生成产品发布和推广所需的一整套文案资产包",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>{children}</body>body>
    </html>html>
  );
}</html>




















