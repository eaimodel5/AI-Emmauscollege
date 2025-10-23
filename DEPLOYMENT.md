# Deployment Guide for AI Kennisplatform Emmauscollege

## 🚀 Quick Deployment Options

### Option 1: Vercel (Recommended)
1. **Sign up/Login to Vercel**: Go to [vercel.com](https://vercel.com) and create an account
2. **Install Vercel CLI** (already done): `npm install -g vercel`
3. **Login to Vercel**: Run `vercel login` in the terminal
4. **Deploy**: Run `vercel --prod` in the project directory
5. **Set Environment Variables**: In Vercel dashboard, add `GEMINI_API_KEY` environment variable

### Option 2: Netlify
1. **Sign up/Login to Netlify**: Go to [netlify.com](https://netlify.com) and create an account
2. **Install Netlify CLI** (already done): `npm install -g netlify-cli`
3. **Login to Netlify**: Run `netlify login` in the terminal
4. **Deploy**: Run `netlify deploy --prod --dir=dist` in the project directory
5. **Set Environment Variables**: In Netlify dashboard, add `GEMINI_API_KEY` environment variable

### Option 3: GitHub Pages
1. **Push to GitHub**: Push this code to a GitHub repository
2. **Enable GitHub Pages**: Go to repository Settings > Pages
3. **Set Source**: Select "GitHub Actions" as source
4. **Use the provided workflow**: The `.github/workflows/deploy.yml` file will handle deployment

### Option 4: Manual Static Hosting
1. **Build the project**: `npm run build` (already done)
2. **Upload dist folder**: Upload the contents of the `dist` folder to any static hosting service
3. **Configure redirects**: Ensure all routes redirect to `index.html` for SPA routing

## 📁 Project Structure
- **Source files**: All React components and TypeScript files
- **Build output**: `dist/` folder contains the production build
- **Configuration**: `vercel.json`, `netlify.toml`, and `_redirects` for different platforms

## 🔧 Environment Variables
Make sure to set the `GEMINI_API_KEY` environment variable in your hosting platform:
- Get your API key from [Google AI Studio](https://aistudio.google.com/)
- Add it as an environment variable in your hosting platform

## 🌐 Current Status
- ✅ Project built successfully
- ✅ Dependencies installed
- ✅ Production build created in `dist/` folder
- ✅ Deployment configuration files created
- ⏳ Ready for deployment to your chosen platform

## 🚀 Next Steps
1. Choose your preferred deployment platform
2. Follow the specific instructions above
3. Set up your environment variables
4. Your site will be live and accessible via the provided URL