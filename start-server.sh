#!/bin/bash

# Zentryx Pro - 本地服务器启动脚本
# 使用方法: ./start-server.sh

echo "🚀 启动 Zentryx Pro 本地服务器..."
echo ""

# 检查是否在正确的目录
if [ ! -f "index.html" ]; then
    echo "❌ 错误: 找不到 index.html 文件"
    echo "请确保在项目根目录中运行此脚本"
    exit 1
fi

# 检查 Python 是否安装
if command -v python3 &> /dev/null; then
    echo "✅ 找到 Python 3"
    echo "📡 服务器启动在: http://localhost:8000"
    echo "🛑 按 Ctrl+C 停止服务器"
    echo ""
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "✅ 找到 Python 2"
    echo "📡 服务器启动在: http://localhost:8000"
    echo "🛑 按 Ctrl+C 停止服务器"
    echo ""
    python -m SimpleHTTPServer 8000
else
    echo "❌ 错误: 未找到 Python"
    echo ""
    echo "请安装 Python 或使用其他方法："
    echo "1. 直接在浏览器中打开 index.html"
    echo "2. 使用 Node.js: npm install -g http-server && http-server"
    echo "3. 使用 VS Code Live Server 扩展"
    exit 1
fi


