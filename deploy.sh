#!/bin/bash

# Portfolio Deployment Script
echo "🚀 Deploying Portfolio..."

# Build the project
echo "📦 Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Deploy to Netlify (if netlify CLI is installed)
    if command -v netlify &> /dev/null; then
        echo "🌐 Deploying to Netlify..."
        netlify deploy --prod --dir=dist
    else
        echo "📁 Build files ready in 'dist' folder"
        echo "💡 Upload the 'dist' folder to your hosting provider"
    fi
else
    echo "❌ Build failed!"
    exit 1
fi

echo "🎉 Deployment complete!"
