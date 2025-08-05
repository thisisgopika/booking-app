# 🏨 Hotel Room Booking App

A modern, full-stack web application for managing hotel room bookings with real-time search and filtering capabilities. Built with React frontend and Node.js backend, featuring a complete CRUD interface for room management.

## 🌟 Live Demo
- **Frontend**: [https://your-app.vercel.app](https://your-app.vercel.app)
- **Backend API**: [https://your-app.railway.app](https://your-app.railway.app)

## ✨ Features

- **🏨 Room Management**: Add, edit, and delete hotel rooms
- **🔍 Advanced Search**: Search rooms by name or type with real-time filtering
- **💰 Price Filtering**: Filter rooms by minimum and maximum price
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
- **⚡ Real-time Updates**: Instant search results without page refresh
- **🛡️ CRUD Operations**: Complete Create, Read, Update, Delete functionality

## 🛠️ Tech Stack

### Frontend
- **React 19.1.0** - Modern UI library
- **Axios** - HTTP client for API communication
- **React Router DOM** - Client-side routing
- **CSS3** - Styling and responsive design

### Backend
- **Node.js** - JavaScript runtime
- **Express.js 5.1.0** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose 8.16.2** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Database
- **MongoDB Atlas** - Cloud database service

## 📋 Prerequisites

Before running this application, make sure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account (for database)

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/booking-app.git
cd booking-app
```

### 2. Install Frontend Dependencies
```bash
npm install
```

### 3. Install Backend Dependencies
```bash
cd server
npm install
cd ..
```

### 4. Environment Setup

Create a `.env` file in the `server` directory:
```env
MONGO_URL=your_mongodb_atlas_connection_string
PORT=5000
```

### 5. Start the Application

#### Start Backend Server
```bash
cd server
npm start
```
The backend will run on `http://localhost:5000`

#### Start Frontend (in a new terminal)
```bash
npm start
```
The frontend will run on `http://localhost:3000`

## 📖 Usage

### Adding a Room
1. Fill in the room details (name, type, price, capacity)
2. Click "Add Room" button
3. The room will appear in the list below

### Searching Rooms
1. Use the search box to filter rooms by name or type
2. Results update in real-time as you type

### Filtering by Price
1. Enter minimum price in the "Min Price" field
2. Enter maximum price in the "Max Price" field
3. Rooms within the price range will be displayed

### Editing a Room
1. Click the "Edit" button on any room card
2. Modify the details in the form
3. Click "Update Room" to save changes

### Deleting a Room
1. Click the "Delete" button on any room card
2. The room will be removed from the list

## 🔧 API Endpoints

### Rooms
- `GET /api/rooms` - Get all rooms (with optional search and price filters)
- `POST /api/rooms` - Create a new room
- `PUT /api/rooms/:id` - Update a room
- `DELETE /api/rooms/:id` - Delete a room

### Query Parameters
- `search` - Search rooms by name or type
- `minPrice` - Filter by minimum price
- `maxPrice` - Filter by maximum price

## 🚀 Deployment

### Live Demo
- **Frontend**: [https://your-app.vercel.app](https://your-app.vercel.app)
- **Backend API**: [https://your-app.railway.app](https://your-app.railway.app)

### Frontend Deployment (Vercel)
1. Build the project: `npm run build`
2. Deploy to Vercel with environment variable: `REACT_APP_API_URL=https://your-backend-url.railway.app`

### Backend Deployment (Railway)
1. Set environment variables in Railway:
   - `MONGO_URL`: Your MongoDB Atlas connection string
   - `PORT`: 5000
2. Deploy the `server` folder
3. Update frontend API URLs to point to your deployed backend

### Environment Variables
- **Frontend**: `REACT_APP_API_URL=https://your-backend-url.railway.app`
- **Backend**: `MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/database`

## 📸 Screenshots

### Main Interface
![Main Interface](https://via.placeholder.com/800x400/4A90E2/FFFFFF?text=Hotel+Room+Booking+App)

### Search Functionality
![Search Functionality](https://via.placeholder.com/800x400/50C878/FFFFFF?text=Search+and+Filter+Rooms)

### Add/Edit Room Form
![Add/Edit Room Form](https://via.placeholder.com/800x400/FF6B35/FFFFFF?text=Add+Edit+Room+Form)

> **Note:** Screenshots are placeholders. Add actual screenshots of your application after deployment.

## 🐛 Troubleshooting

### Common Issues

1. **Backend not connecting to database**
   - Check your MongoDB Atlas connection string
   - Ensure your IP is whitelisted in MongoDB Atlas

2. **Frontend not loading data**
   - Verify backend server is running on port 5000
   - Check browser console for CORS errors

3. **Search not working**
   - Ensure backend routes are properly mounted
   - Check for any conflicting processes on port 5000

### Debug Commands
```bash
# Check processes on port 5000
netstat -ano | findstr :5000

# Kill conflicting processes
taskkill /PID <process_id> /F

# Test API directly
curl "http://localhost:5000/api/rooms?search=test"
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourusername)
- Portfolio: [Your Portfolio](https://your-portfolio.com)

## 📊 Project Status
- ✅ Frontend: React with modern hooks and state management
- ✅ Backend: Node.js/Express with MongoDB
- ✅ Database: MongoDB Atlas cloud database
- ✅ Authentication: JWT-based user authentication
- ✅ Deployment: Vercel (Frontend) + Railway (Backend)
- ✅ Features: Complete CRUD operations with search and filtering

## 🙏 Acknowledgments

- React team for the amazing framework
- Express.js for the robust backend framework
- MongoDB Atlas for the cloud database service
- All contributors and supporters

---

⭐ **Star this repository if you found it helpful!**
