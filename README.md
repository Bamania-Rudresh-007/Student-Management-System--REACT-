# 🎓 Student Management System (SMS)

> A fully functional Student Management System built with **React + Vite** — featuring authentication, complete CRUD operations, dynamic dataset handling, theme switching, and a modern, responsive UI.

🔗 **Live Demo:** [sms-rudresh.vercel.app](https://sms-rudresh.vercel.app)
📦 **Repository:** [GitHub](https://github.com/Bamania-Rudresh-007/Student-Management-System--REACT-)

---

## 🚀 Features

### 🔐 Authentication
- User Signup & Login
- LocalStorage-based authentication
- Protected routes with auto-redirect
- Logout functionality

### 👨‍🎓 Student Management (CRUD)
- Create new students
- View full student list
- Update student details by unique ID
- Delete students
- View individual student profiles
- Edge case handling & form validation

### 📊 Dynamic Data Handling
- Load stored or randomly generated student data
- Input range selector (1–150 students)
- Dummy dataset with 150 students
- Conditional rendering based on selection

### 🎨 UI / UX
- Fully responsive design
- Dark / Light theme toggle
- Loading, empty, and error states
- Clean, refined component structure

---

## 🛠 Tech Stack

| Category | Technology |
|---|---|
| Framework | React (Vite) |
| Routing | React Router DOM |
| State Management | Context API |
| Persistence | LocalStorage |
| Language | JavaScript (ES6+) |
| Styling | Tailwind CSS / Modern UI |

---

## 🏗 Project Structure

```
src/
├── 📁 assets/
├── 📁 components/
│   ├── 📁 AllStudents-AND-PersonalCards/
│   │   ├── ViewStudentCards.jsx
│   │   └── ViewStudentsDetails.jsx
│   ├── 📁 CRUD-OPERATIONS/
│   │   ├── AddStudent.jsx
│   │   ├── DeleteStudent.jsx
│   │   └── UpdateStudent.jsx
│   ├── 📁 Error-Handlers/
│   │   └── SomthingWentWrong.jsx
│   ├── 📁 Home/
│   │   └── Home.jsx
│   ├── 📁 Welcome-Page/
│   │   ├── AboutSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── FeaturesSection.jsx
│   │   ├── Login-btn-handler.jsx
│   │   ├── Sign-btn-handler.jsx
│   │   └── Welcome.jsx
│   └── 📁 logIn-SignUp/
│       ├── 📁 login-form/
│       │   ├── LogIn.jsx
│       │   └── inputPass.jsx
│       └── 📁 signup-form/
│           ├── Input.jsx
│           ├── SignUp.jsx
│           └── inputPass.jsx
├── 📁 contexts/
│   ├── StudentsContext.jsx
│   ├── UsersContext.jsx
│   └── useLocalUsers.jsx
├── 📁 dummyData/
│   └── data.js
├── 📁 hooks/
│   └── useCrudOperations.js
├── App.jsx
├── index.css
└── main.jsx
```

**Architecture highlights:**
- Components grouped by feature/responsibility (CRUD, Auth, Welcome, Students)
- Contexts separated per domain — `StudentsContext` & `UsersContext`
- Custom hook `useCrudOperations.js` encapsulates all CRUD logic
- Controlled form handling with validation
- Clean re-render strategy
- Production-ready with console logs removed

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/Bamania-Rudresh-007/Student-Management-System--REACT-
cd Student-Management-System--REACT-

# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build
```

---

## 🌐 Deployment

This project is deployed on **Vercel**.

🔗 Live URL: [https://sms-rudresh.vercel.app](https://sms-rudresh.vercel.app)

---

## 🧠 What This Project Demonstrates

- React fundamentals & component architecture
- Authentication flow & route protection
- Global state management with Context API
- Complete CRUD lifecycle implementation
- UI/UX decision making & responsive design
- Data scalability & dynamic dataset handling
- Production-ready deployment

---

## 📌 Roadmap

- [ ] Backend integration (Node.js + Express)
- [ ] Database support (MongoDB / PostgreSQL)
- [ ] Real authentication with JWT
- [ ] Pagination & advanced filtering
- [ ] Role-based access control

---

## 👨‍💻 Author

**Rudresh Bamania**
Frontend Developer | React Enthusiast

[![GitHub](https://img.shields.io/badge/GitHub-Bamania--Rudresh--007-181717?style=flat&logo=github)](https://github.com/Bamania-Rudresh-007)
