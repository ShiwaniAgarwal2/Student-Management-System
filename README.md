# 🎓 Student Management System

A responsive web-based **Student Management System** developed using **HTML, CSS, JavaScript, jQuery, and Chart.js**. The application allows users to manage student records, view individual student details, analyze marks through graphical representation, and download student data.

---

## 🚀 Features

- 🏠 Home page with responsive navigation
- ➕ Add new student records
- 📋 View all registered students
- 👤 Individual student profile page
- ✏️ Edit student information
- 🗑️ Delete student records
- 📊 Dashboard with marks distribution chart
- 🏆 Student ranking based on marks
- 📥 Download all student records as CSV
- 📱 Responsive design for desktop and mobile devices

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript (ES6)
- jQuery
- Chart.js
- Bootstrap 5

### Backend
- REST API (Node.js/Express backend required)

### Database
- MongoDB (through backend APIs)

---

## 📁 Project Structure

```
Student-Management-System/
│
├── home.html
├── reg.html
├── studdetails.html
├── student.html
├── dashboard.html
│
├── home.css
├── reg.css
├── student.css
├── Stud.css
├── dashboard.css
├── navigation.css
│
├── script.js
├── dashboard.js
│
├── navbar.html
├── menu.svg
├── close.svg
│
└── package-lock.json
```

---

## 📸 Modules

### 🏠 Home
- Landing page
- Responsive navigation
- University information

### ➕ Student Registration
- Add student details
- Input validation
- Duplicate entry handling

### 📋 Student Details
- Display all students
- Student cards with profile image
- Download all student data as CSV

### 👤 Student Profile
- View student details
- Edit information
- Delete record

### 📊 Dashboard
- Marks distribution graph using Chart.js
- Student ranking table
- Class statistics

---

## 🔗 API Endpoints

The frontend communicates with the following REST APIs:

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/studdetails` | Fetch all students |
| GET | `/api/student/:rollNo` | Fetch single student |
| POST | `/api/addStudent` | Add new student |
| PUT | `/api/editStudent/:rollNo` | Update student |
| DELETE | `/api/deleteStudent/:rollNo` | Delete student |
| GET | `/api/downloadAllStudents` | Download CSV |

---

## ▶️ How to Run

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/student-management-system.git
```

### 2. Open the project

```bash
cd student-management-system
```

### 3. Start the backend server

Make sure your backend server is running on:

```
http://localhost:5000
```

### 4. Open

```
home.html
```

using Live Server or any web server.

---

## 📊 Dashboard

The dashboard provides:

- Marks Distribution Graph
- Student Ranking
- Class Statistics

---

## 📱 Responsive Design

The application is fully responsive and supports:

- Desktop
- Tablet
- Mobile

---

## 🔮 Future Enhancements

- User Authentication
- Admin Login
- Search Students
- Filter & Sort
- Attendance Management
- Result Generation
- PDF Export
- Cloud Deployment

---

## 👨‍💻 Author

**Shiwani Agarwal**

GitHub: https://github.com/ShiwaniAgarwal2

---

## 📜 License

This project is developed for educational purposes.
