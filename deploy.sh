#!/bin/bash

# AI Kennisplatform Emmauscollege - Deployment Script
# This script helps you deploy to various platforms

echo "🚀 AI Kennisplatform Emmauscollege - Deployment Helper"
echo "=================================================="

# Check if dist folder exists
if [ ! -d "dist" ]; then
    echo "📦 Building project..."
    npm run build
    if [ $? -ne 0 ]; then
        echo "❌ Build failed. Please fix errors and try again."
        exit 1
    fi
    echo "✅ Build completed successfully!"
else
    echo "✅ Build folder exists"
fi

echo ""
echo "Choose your deployment method:"
echo "1) Netlify (Drag & Drop) - Easiest"
echo "2) Netlify CLI"
echo "3) Vercel CLI"
echo "4) Surge.sh"
echo "5) Firebase Hosting"
echo "6) GitHub Pages (via Git push)"
echo ""

read -p "Enter your choice (1-6): " choice

case $choice in
    1)
        echo "🌐 Netlify Drag & Drop Method:"
        echo "1. Go to https://netlify.com"
        echo "2. Sign up/login to your account"
        echo "3. Drag the 'dist' folder from this directory onto the Netlify dashboard"
        echo "4. Your site will be live instantly!"
        echo ""
        echo "📁 The 'dist' folder is ready at: $(pwd)/dist"
        ;;
    2)
        echo "🌐 Deploying to Netlify via CLI..."
        if command -v netlify &> /dev/null; then
            netlify deploy --prod --dir=dist
        else
            echo "❌ Netlify CLI not found. Installing..."
            npm install -g netlify-cli
            netlify deploy --prod --dir=dist
        fi
        ;;
    3)
        echo "🌐 Deploying to Vercel via CLI..."
        if command -v vercel &> /dev/null; then
            vercel --prod
        else
            echo "❌ Vercel CLI not found. Installing..."
            npm install -g vercel
            vercel --prod
        fi
        ;;
    4)
        echo "🌐 Deploying to Surge.sh..."
        if command -v surge &> /dev/null; then
            cd dist && surge
        else
            echo "❌ Surge CLI not found. Installing..."
            npm install -g surge
            cd dist && surge
        fi
        ;;
    5)
        echo "🌐 Deploying to Firebase Hosting..."
        if command -v firebase &> /dev/null; then
            firebase deploy
        else
            echo "❌ Firebase CLI not found. Installing..."
            npm install -g firebase-tools
            firebase login
            firebase init hosting
            firebase deploy
        fi
        ;;
    6)
        echo "🌐 GitHub Pages Deployment:"
        echo "1. Push your code to GitHub:"
        echo "   git add ."
        echo "   git commit -m 'Deploy to GitHub Pages'"
        echo "   git push origin main"
        echo "2. Go to your repository Settings > Pages"
        echo "3. Select 'GitHub Actions' as source"
        echo "4. The workflow will deploy automatically"
        ;;
    *)
        echo "❌ Invalid choice. Please run the script again."
        exit 1
        ;;
esac

echo ""
echo "🎉 Deployment process completed!"
echo "📖 For detailed instructions, see DEPLOYMENT_GUIDE.md"