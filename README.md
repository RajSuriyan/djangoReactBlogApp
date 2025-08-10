# 📝 Blog App

A full-stack blog application built with **Django (backend)**, **React (frontend)**, and **SQL (database)**.  
Users can **create**, **edit**, and **delete** their own blog posts.

---

## 🚀 Features
- ✍️ Create a new blog post
- ✏️ Edit existing posts
- 🗑️ Delete posts
- 📄 View all posts
- 🔐 User authentication & authorization

---

## 🛠 Tech Stack
**Frontend:** React, Axios,
**Backend:** Django, Django REST Framework  
**Database:** SQLite

---

## 📦 Installation

### 1️⃣ Backend (Django)
```bash
# Clone the repository
git clone https://github.com/username/blog-app.git
cd blog-app/backend

# Create virtual environment
python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Start backend server
python manage.py runserver

### For frontend install node modules and
npm run dev
