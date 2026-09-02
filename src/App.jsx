
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import AddEmployee from './pages/AddEmployee';
import Login from './pages/Login';
import EmployeeModal from './components/EmployeeModal';
import { initialEmployees } from './data/employees';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // LocalStorage support-oda employees sample data-v load panrom
  const [employees, setEmployees] = useState(() => {
    const saved = localStorage.getItem('workpulse_employees_v3');
    return saved ? JSON.parse(saved) : initialEmployees;
  });

  useEffect(() => {
    localStorage.setItem('workpulse_employees_v3', JSON.stringify(employees));
  }, [employees]);

  if (!isLoggedIn) return <Login onLogin={() => setIsLoggedIn(true)} />;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex font-sans selection:bg-indigo-600 selection:text-white">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onLogout={() => setIsLoggedIn(false)} 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen} 
      />

      <div className="flex-1 flex flex-col lg:pl-72 min-w-0">
        <Navbar activeTab={activeTab} setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 p-6 sm:p-10 max-w-7xl w-full mx-auto">
          {activeTab === 'dashboard' && (
            <Dashboard 
              employees={employees} 
              onViewEmployee={setSelectedEmployee} 
              setActiveTab={setActiveTab} 
            />
          )}
          
          {activeTab === 'employees' && (
            <Employees 
              employees={employees} 
              onViewEmployee={setSelectedEmployee} 
              onAddEmployee={() => setActiveTab('add-employee')} // <-- Fixed: Connected here!
            />
          )}

          {activeTab === 'add-employee' && (
            <AddEmployee 
              onAddEmployee={(newEmp) => setEmployees([newEmp, ...employees])} 
              setActiveTab={setActiveTab} 
            />
          )}
        </main>
      </div>

      <EmployeeModal 
        employee={selectedEmployee} 
        onClose={() => setSelectedEmployee(null)} 
      />
    </div>
  );
}