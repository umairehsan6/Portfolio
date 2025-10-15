#!/bin/bash

# Portfolio Development Server
echo "🎨 Starting Portfolio Development Server..."

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Start development server
echo "🚀 Starting development server..."
npm run dev
