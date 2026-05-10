# 🚀 URL Shortener — MERN Stack Web Application

A modern and responsive URL Shortener web application built using React, TypeScript, Tailwind CSS, Node.js, Express.js and MongoDB.

---

## 🛠 Tech Stack

![React](https://img.shields.io/badge/Frontend-React-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/UI-TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss)
![NodeJS](https://img.shields.io/badge/Backend-Node.js-339933?style=for-the-badge&logo=node.js)
![ExpressJS](https://img.shields.io/badge/Server-Express.js-black?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb)

---

# ✨ Features

- 🔗 Shorten long URLs instantly
- 📋 Copy short URLs to clipboard
- 🗑 Delete shortened URLs
- 📊 Track click counts
- 🌌 Modern galaxy-themed UI
- 📱 Fully responsive design
- ⚡ Fast REST API integration
- 💾 MongoDB database storage

---

# 📁 Project Structure

```plaintext
client/
 ├── src/
 │    ├── components/
 │    ├── helpers/
 │    ├── interface/
 │    ├── assets/
 │    └── App.tsx

server/
 ├── src/
 │    ├── config/
 │    ├── controllers/
 │    ├── model/
 │    ├── routes/
 │    └── server.ts
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone <your-repository-url>
```

---

# 💻 Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```plaintext
http://localhost:3000
```

---

# 🖥 Backend Setup

```bash
cd server
npm install
npm run dev
```

Backend runs on:

```plaintext
http://localhost:5001
```

---

# 🔐 Environment Variables

Create `.env` file inside server folder.

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
```

---

# 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/shortUrl` | Create short URL |
| GET | `/api/shortUrl` | Get all URLs |
| GET | `/api/shortUrl/:id` | Get single URL |
| DELETE | `/api/shortUrl/:id` | Delete URL |
| GET | `/:shortUrl` | Redirect to original URL |

---

# 🌟 Future Enhancements

- 🔐 User Authentication
- 📈 Analytics Dashboard
- 🎨 Dark / Light Mode
- 📱 QR Code Generator
- ✏️ Custom Short URLs
- ⏳ Expiry Links

---

# 👩‍💻 Author

### Kavya Sri

---

# 📜 License

This project is licensed under the MIT License.
