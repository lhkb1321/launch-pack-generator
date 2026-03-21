"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function GeneratorPage() {
  const [formData, setFormData] = useState({
    productName: "",
    oneLiner: "",
    targetAudience: "",
    problemSolved: "",
    coreFeatures: "",
    websiteUrl: "",
    tone: "professional",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 调用 API 生成文案
    console.log("提交的数据:", formData);
    alert("功能开发中，敬请期待！");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              生成你的 Launch Pack
            </h1>h1>
            <p className="text-xl text-gray-600">
              填写产品信息，AI 将为你生成一整套发布文案
            </p>p>
          </div>div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
            {/* 产品名称 */}
            <div className="mb-6">
              <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-2">
                产品名称 *
              </label>label>
              <input
                type="text"
                id="productName"
                name="productName"
                value={formData.productName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="例如：LaunchPack AI"
              />
            </div>div>

            {/* 一句话介绍 */}
            <div className="mb-6">
              <label htmlFor="oneLiner" className="block text-sm font-medium text-gray-700 mb-2">
                一句话介绍 *
              </label>label>
              <input
                type="text"
                id="oneLiner"
                name="oneLiner"
                value={formData.oneLiner}
                onChange={handleInputChange}
                required
                maxLength={120}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="限制 120 字符内"
              />
              <p className="text-xs text-gray-500 mt-1">
                {formData.oneLiner.length}/120 字符
              </p>p>
            </div>div>

            {/* 目标用户 */}
            <div className="mb-6">
              <label htmlFor="targetAudience" className="block text-sm font-medium text-gray-700 mb-2">
                目标用户 *
              </label>label>
              <input
                type="text"
                id="targetAudience"
                name="targetAudience"
                value={formData.targetAudience}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="例如：独立开发者、SaaS 创业者"
              />
            </div>div>

            {/* 解决的问题 */}
            <div className="mb-6">
              <label htmlFor="problemSolved" className="block text-sm font-medium text-gray-700 mb-2">
                解决的问题 *
              </label>label>
              <textarea
                id="problemSolved"
                name="problemSolved"
                value={formData.problemSolved}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="描述你的产品解决了什么痛点（200-500 字）"
              />
            </div>div>

            {/* 核心功能 */}
            <div className="mb-6">
              <label htmlFor="coreFeatures" className="block text-sm font-medium text-gray-700 mb-2">
                核心功能 *
              </label>label>
              <textarea
                id="coreFeatures"
                name="coreFeatures"
                value={formData.coreFeatures}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="列出 3-5 个核心功能点，每行一个"
              />
            </div>div>

            {/* 官网链接 */}
            <div className="mb-6">
              <label htmlFor="websiteUrl" className="block text-sm font-medium text-gray-700 mb-2">
                官网链接（可选）
              </label>label>
              <input
                type="url"
                id="websiteUrl"
                name="websiteUrl"
                value={formData.websiteUrl}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://yourproduct.com"
              />
            </div>div>

            {/* 语气风格 */}
            <div className="mb-8">
              <label htmlFor="tone" className="block text-sm font-medium text-gray-700 mb-2">
                语气风格 *
              </label>label>
              <select
                id="tone"
                name="tone"
                value={formData.tone}
                onChange=</main>

























