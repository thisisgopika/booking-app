# 🚀 Deployment Steps for Hotel Booking App

## 📋 Prerequisites
- ✅ GitHub repository: https://github.com/thisisgopika/booking-app.git
- ✅ MongoDB Atlas account
- ✅ Railway account (free tier available)
- ✅ Vercel account (free tier available)

## 🔧 Step 1: Backend Deployment (Railway)

### 1.1 Set up Railway
1. Go to [Railway.app](https://railway.app)
2. Sign up/login with your GitHub account
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Choose your `booking-app` repository

### 1.2 Configure Backend
1. Set **Root Directory** to `server`
2. Go to **Variables** tab
3. Add these environment variables:
   ```
   MONGO_URL=your_mongodb_atlas_connection_string
   PORT=5000
   ```
4. Replace `your_mongodb_atlas_connection_string` with your actual MongoDB Atlas connection string

### 1.3 Deploy Backend
1. Railway will automatically deploy your backend
2. Wait for deployment to complete
3. Note the deployment URL (e.g., `https://your-app.railway.app`)

## 🌐 Step 2: Frontend Deployment (Vercel)

### 2.1 Set up Vercel
1. Go to [Vercel.com](https://vercel.com)
2. Sign up/login with your GitHub account
3. Click "New Project"
4. Import your `booking-app` repository

### 2.2 Configure Frontend
1. **Framework Preset**: Create React App
2. **Root Directory**: `./` (root)
3. **Build Command**: `npm run build`
4. **Output Directory**: `build`

### 2.3 Add Environment Variable
1. Go to **Environment Variables**
2. Add: `REACT_APP_API_URL` = `https://your-backend-url.railway.app`
3. Replace `your-backend-url.railway.app` with your actual Railway backend URL

### 2.4 Deploy Frontend
1. Click "Deploy"
2. Wait for deployment to complete
3. Note the frontend URL (e.g., `https://your-app.vercel.app`)

## 🧪 Step 3: Testing

### 3.1 Test Backend API
```bash
curl https://your-backend-url.railway.app/api/rooms
```

### 3.2 Test Frontend
1. Visit your Vercel URL
2. Try adding a room
3. Test search functionality
4. Test price filtering

## 🔧 Step 4: Update README

Once both deployments are working:

1. Update the README.md with actual URLs:
   ```markdown
   ## 🌟 Live Demo
   - **Frontend**: https://your-app.vercel.app
   - **Backend API**: https://your-backend-url.railway.app
   ```

2. Push the updated README:
   ```bash
   git add README.md
   git commit -m "Update README with live demo links"
   git push origin main
   ```

## 🐛 Troubleshooting

### Common Issues:

1. **CORS Errors**
   - Update CORS settings in `server/index.js`:
   ```javascript
   app.use(cors({
     origin: ['https://your-frontend-url.vercel.app', 'http://localhost:3000'],
     credentials: true
   }));
   ```

2. **API Not Found**
   - Check environment variables in Railway
   - Verify backend is deployed and running

3. **Database Connection**
   - Verify MongoDB Atlas connection string
   - Check IP whitelist in MongoDB Atlas

4. **Build Failures**
   - Check for syntax errors
   - Verify all dependencies are installed

## 🎉 Success Checklist

- ✅ Backend deployed to Railway
- ✅ Frontend deployed to Vercel
- ✅ API endpoints working
- ✅ Database connected
- ✅ CRUD operations functional
- ✅ Search and filtering working
- ✅ README updated with live links

## 📞 Support

If you encounter issues:
1. Check Railway logs for backend errors
2. Check Vercel logs for frontend errors
3. Verify environment variables are set correctly
4. Test API endpoints directly

---

**Your app will be live and accessible worldwide!** 🌍 