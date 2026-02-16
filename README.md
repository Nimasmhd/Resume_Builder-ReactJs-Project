# 📄 ResuMate - Resume Builder Application

ResuMate is a full-stack **Resume Builder Web Application** built using:

- ⚛️ React.js (Frontend)
- 🟢 Express.js (Backend)
- 🍃 MongoDB (Database)

This application allows users to create, manage, and export professional resumes easily.

---

## 🚀 Features

- User Authentication (JWT-based)
- Create and manage resumes
- Modern UI with React
- REST API using Express.js
- MongoDB Atlas cloud database integration

---
## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

---

## 📂 Project Structure

```
ResuMate/
│
├── backend/                # Express backend
│   ├── server.js
│   ├── .env
│   └── ...
│
├── frontend/
│   └── resume-builder/     # React frontend
│       ├── src/
│       └── ...
│
└── README.md
```
---

## ⚙️ Requirements

- Node.js v23.10.0
- npm v11.2.0
- MongoDB Atlas Account

---

# 🔧 Setup Instructions

Hey! Thanks for using the ResuMate source code.  
Follow the steps carefully. If you skip steps, the app will not work properly.

---

# 🖥️ Backend Setup (Express.js)

### 1. Navigate to Backend Folder

```
cd backend
```

---

### 2. Install Dependencies

```
npm install
```

---

## 🌐 MongoDB Setup

### 3. Create MongoDB Account

Go to:
https://www.mongodb.com/

- Login or Create an account

---

### 4. Create New Project

- Click **"New Project"**
- Enter project name
- Click **Next**
- Add members (optional)
- Click **Create Project**

---

### 5. Create Cluster

- Click **Clusters**
- Click **Build a Cluster**
- Select **Free Tier**
- Give a cluster name
- Choose region close to you
- Click **Create Deployment**

---

### 6. Configure Database Access

- Add IP Address  
  (You can select **Allow Access from Anywhere**)
- Create a database user (username & password)

---

### 7. Get Connection String

- Click **Connect**
- Select **Drivers**
- Copy the connection string

---

### 8. Configure `.env` File

In `.env` file inside the backend folder add:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

Replace `<password>` in the connection string with your database password.

---

### 9. Generate JWT Secret

Run the following command:

```
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

Copy and paste the generated value into `JWT_SECRET`
```.
JWT_SECRET=your_secret_key
PORT=5000
```
---

### 10. Start Backend Server

```
npm run dev
```

---

# 🎨 Frontend Setup (React.js)

### 1. Navigate to Frontend Folder

```
cd frontend/resume-builder
```

---

### 2. Install Dependencies

```
npm install
```

---

### 3. Run Frontend Server

```
npm run dev
```

---

### 4. Open in Browser

The app will automatically open in your browser:

```
http://localhost:5173
```

---

# 🔗 API Configuration

Make sure your frontend is connected to backend API:

Example:
```
http://localhost:5000
```

---

# 📌 Important Notes

- Ensure MongoDB is properly connected
- Backend must run before frontend
- Check `.env` file if any errors occur
- Make sure correct ports are used

---

# 📌 Future Improvements

- Resume templates
- PDF download feature
- Cloud deployment (AWS / Vercel)
- AI resume suggestions

---

# 👨‍💻 Author

**Nimas Rfk**  

---

# 📄 License

This project is for educational use only.
