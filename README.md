# WorkPulse — Employee Management Dashboard

A modern, responsive React-based Employee Management Dashboard built with Tailwind CSS and Lucide React icons. Designed to provide a clean, corporate dark-themed interface for administrative control, employee tracking, and CRUD operations.

---

## 🚀 Features

* **Interactive Dashboard**: Real-time statistics cards (Total Employees, Active Status, On Leave, Departments) and a "Recent Employees" quick-view section.
* **Employee Directory**: Advanced search functionality (by Name, Employee ID, or Email) with multi-criteria filters for Departments and Statuses.
* **Employee Details Modal**: Clickable view triggers that display detailed profiles dynamically (Profile Image, ID, Name, Email, Phone, Department, Position, Joining Date, and Status) without hard-coded HTML.
* **Add New Employee Form**: Fully validated form ensuring all required fields are present and salary is a positive number, with instant state updates.
* **Data Persistence**: LocalStorage integration to retain added employee records across page reloads.
* **Responsive Design**: Fluid layouts optimized for 1440px desktop screens down to 375px mobile viewports, featuring collapsible mobile navigation and responsive tables.

---

## 🛠️ Tech Stack

* **Frontend Library**: React (with Vite)
* **Styling**: Tailwind CSS
* **Icons**: Lucide React
* **State Management**: React Hooks (`useState`, `useEffect`)

---

## 📂 Project Structure

```text
employee-dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── StatCard.jsx
│   │   ├── EmployeeTable.jsx
│   │   └── EmployeeModal.jsx
│   ├── data/
│   │   └── employees.js
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Employees.jsx
│   │   └── AddEmployee.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── README.md

⚙️ Getting Started & Installation
Follow these steps to run the project locally on your machine:

1. Clone the repository (or download the project folder):

git clone [https://github.com/your-username/employee-dashboard.git](https://github.com/your-username/employee-dashboard.git)
cd employee-dashboard

2. Install dependencies:
npm install

3.Run the development server:
npm run dev

4.Open your browser and navigate to http://localhost:5173.