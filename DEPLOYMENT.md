# 🚀 Deployment Guide

This guide will help you deploy your Hotel Room Booking App to live platforms.

## 📋 Prerequisites

- GitHub account
- Vercel account (for frontend)
- Railway account (for backend)
- MongoDB Atlas account (for database)

## 🎯 Deployment Steps

### 1. GitHub Repository Setup

1. **Create GitHub Repository:**
   - Go to https://github.com
   - Click "New repository"
   - Name: `booking-app`
   - Make it Public
   - Don't initialize with README

2. **Push Your Code:**
   ```bash
   git remote set-url origin https://github.com/YOUR_USERNAME/booking-app.git
   git push -u origin main
   ```

### 2. Backend Deployment (Railway)

1. **Go to Railway:**
   - Visit https://railway.app
   - Sign up/login with GitHub

2. **Create New Project:**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your `booking-app` repository

3. **Configure Backend:**
   - Set Root Directory to `server`
   - Add Environment Variables:
     ```
     MONGO_URL=your_mongodb_atlas_connection_string
     PORT=5000
     ```

4. **Deploy:**
   - Railway will automatically deploy your backend
   - Note the deployment URL (e.g., `https://your-app.railway.app`)

### 3. Frontend Deployment (Vercel)

1. **Go to Vercel:**
   - Visit https://vercel.com
   - Sign up/login with GitHub

2. **Import Project:**
   - Click "New Project"
   - Import your GitHub repository
   - Select the `booking-app` repository

3. **Configure Frontend:**
   - Framework Preset: **Create React App**
   - Root Directory: `./` (root)
   - Build Command: `npm run build`
   - Output Directory: `build`

4. **Add Environment Variable:**
   - Go to Project Settings → Environment Variables
   - Add: `REACT_APP_API_URL` = `https://your-backend-url.railway.app`

5. **Deploy:**
   - Click "Deploy"
   - Vercel will build and deploy your frontend

### 4. Update CORS Settings

If you encounter CORS issues, update your backend CORS settings:

```javascript
// In server/index.js
app.use(cors({
  origin: ['https://your-frontend-url.vercel.app', 'http://localhost:3000'],
  credentials: true
}));
```

### 5. Test Your Deployment

1. **Test Backend API:**
   ```
   https://your-backend-url.railway.app/api/rooms
   ```

2. **Test Frontend:**
   ```
   https://your-frontend-url.vercel.app
   ```

## 🔧 Environment Variables

### Backend (Railway)
```
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/database
PORT=5000
```

### Frontend (Vercel)
```
REACT_APP_API_URL=https://your-backend-url.railway.app
```

## 🐛 Troubleshooting

### Common Issues:

1. **CORS Errors:**
   - Update CORS settings in backend
   - Ensure frontend URL is whitelisted

2. **API Not Found:**
   - Check environment variables
   - Verify backend is deployed and running

3. **Database Connection:**
   - Verify MongoDB Atlas connection string
   - Check IP whitelist in MongoDB Atlas

4. **Build Failures:**
   - Check for syntax errors
   - Verify all dependencies are installed

## 📞 Support

If you encounter issues:
1. Check Railway logs for backend errors
2. Check Vercel logs for frontend errors
3. Verify environment variables are set correctly
4. Test API endpoints directly

## 🎉 Success!

Once deployed, you'll have:
- ✅ Live frontend: `https://your-app.vercel.app`
- ✅ Live backend: `https://your-app.railway.app`
- ✅ Working API endpoints
- ✅ Full CRUD functionality
- ✅ Search and filtering capabilities

**Your app is now live and accessible to users worldwide!** 🌍 