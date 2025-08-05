#!/bin/bash

echo "🚀 Starting deployment process..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git repository not initialized. Please run: git init"
    exit 1
fi

# Check if there are uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  You have uncommitted changes. Please commit them first:"
    echo "   git add ."
    echo "   git commit -m 'Ready for deployment'"
    exit 1
fi

echo "✅ Repository is clean"

# Build the project
echo "🔨 Building frontend..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Frontend build successful"
else
    echo "❌ Frontend build failed"
    exit 1
fi

# Check if .env files exist
if [ ! -f "server/.env" ]; then
    echo "⚠️  Warning: server/.env file not found"
    echo "   Please create server/.env with your MongoDB connection string"
fi

echo ""
echo "🎉 Ready for deployment!"
echo ""
echo "Next steps:"
echo "1. Push to GitHub: git push origin main"
echo "2. Deploy backend to Railway:"
echo "   - Go to railway.app"
echo "   - Connect your GitHub repo"
echo "   - Set root directory to 'server'"
echo "   - Add environment variables"
echo "3. Deploy frontend to Vercel:"
echo "   - Go to vercel.com"
echo "   - Import your GitHub repo"
echo "   - Add REACT_APP_API_URL environment variable"
echo ""
echo "Good luck! 🚀" 