// // import React, { useState } from 'react';
// // import EmployeeTable from '../components/EmployeeTable';
// // import { Search, Filter } from 'lucide-react';

// // export default function Employees({ employees, onViewEmployee }) {
// //   const [search, setSearch] = useState('');
// //   const [dept, setDept] = useState('All');
// //   const [status, setStatus] = useState('All');

// //   const filtered = employees.filter(emp => {
// //     // Search by Name, Employee ID, or Email as per PDF requirements
// //     const matchSearch = 
// //       emp.name.toLowerCase().includes(search.toLowerCase()) ||
// //       emp.id.toLowerCase().includes(search.toLowerCase()) ||
// //       emp.email.toLowerCase().includes(search.toLowerCase());

// //     const matchDept = dept === 'All' || emp.department === dept;
// //     const matchStatus = status === 'All' || emp.status === status;

// //     return matchSearch && matchDept && matchStatus;
// //   });

// //   return (
// //     <div className="space-y-6 text-white">
// //       {/* Search and Filters Bar */}
// //       <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        
// //         {/* Search Input */}
// //         <div className="relative w-full md:w-96">
// //           <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
// //           <input
// //             type="text"
// //             placeholder="Search by Name, ID, or Email..."
// //             value={search}
// //             onChange={(e) => setSearch(e.target.value)}
// //             className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm font-medium text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors"
// //           />
// //         </div>

// //         {/* Filters Wrapper */}
// //         <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          
// //           {/* Department Filter */}
// //           <div className="flex items-center space-x-2 bg-slate-950 border border-slate-800 px-3.5 py-2.5 rounded-lg text-sm flex-1 md:flex-initial">
// //             <Filter size={15} className="text-slate-500" />
// //             <select 
// //               value={dept} 
// //               onChange={(e) => setDept(e.target.value)} 
// //               className="bg-transparent font-medium text-slate-300 focus:outline-none cursor-pointer text-xs"
// //             >
// //               {['All', 'Development', 'Design', 'HR', 'Marketing', 'Finance', 'Sales'].map(d => (
// //                 <option key={d} value={d} className="bg-slate-900 text-white">{d}</option>
// //               ))}
// //             </select>
// //           </div>

// //           {/* Status Filter */}
// //           <div className="flex items-center space-x-2 bg-slate-950 border border-slate-800 px-3.5 py-2.5 rounded-lg text-sm flex-1 md:flex-initial">
// //             <Filter size={15} className="text-slate-500" />
// //             <select 
// //               value={status} 
// //               onChange={(e) => setStatus(e.target.value)} 
// //               className="bg-transparent font-medium text-slate-300 focus:outline-none cursor-pointer text-xs"
// //             >
// //               {['All', 'Active', 'On Leave', 'Inactive'].map(s => (
// //                 <option key={s} value={s} className="bg-slate-900 text-white">{s}</option>
// //               ))}
// //             </select>
// //           </div>

// //         </div>
// //       </div>

// //       <EmployeeTable employees={filtered} onViewEmployee={onViewEmployee} />
// //     </div>
// //   );
// // }
// // import React, { useState } from 'react';
// // import EmployeeTable from '../components/EmployeeTable';
// // import { Search, Filter } from 'lucide-react';

// // export default function Employees({ employees, onViewEmployee }) {
// //   const [search, setSearch] = useState('');
// //   const [dept, setDept] = useState('All');
// //   const [status, setStatus] = useState('All');

// //   const filtered = employees.filter(emp => {
// //     // Search by Name, Employee ID, or Email as per PDF requirements[cite: 1]
// //     const matchSearch = 
// //       emp.name.toLowerCase().includes(search.toLowerCase()) ||
// //       emp.id.toLowerCase().includes(search.toLowerCase()) ||
// //       emp.email.toLowerCase().includes(search.toLowerCase());

// //     const matchDept = dept === 'All' || emp.department === dept;
// //     const matchStatus = status === 'All' || emp.status === status;

// //     return matchSearch && matchDept && matchStatus;
// //   });

// //   return (
// //     <div className="space-y-6 text-slate-900">
// //       {/* Search and Filters Bar */}
// //       <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        
// //         {/* Search Input */}
// //         <div className="relative w-full md:w-96">
// //           <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
// //           <input
// //             type="text"
// //             placeholder="Search by Name, ID, or Email..."
// //             value={search}
// //             onChange={(e) => setSearch(e.target.value)}
// //             className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 transition-colors"
// //           />
// //         </div>

// //         {/* Filters Wrapper */}
// //         <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          
// //           {/* Department Filter */}
// //           <div className="flex items-center space-x-2 bg-slate-50 border border-slate-200 px-3.5 py-2.5 rounded-lg text-sm flex-1 md:flex-initial">
// //             <Filter size={15} className="text-slate-400" />
// //             <select 
// //               value={dept} 
// //               onChange={(e) => setDept(e.target.value)} 
// //               className="bg-transparent font-medium text-slate-700 focus:outline-none cursor-pointer text-xs"
// //             >
// //               {['All', 'Development', 'Design', 'HR', 'Marketing', 'Finance', 'Sales'].map(d => (
// //                 <option key={d} value={d} className="bg-white text-slate-900">{d}</option>
// //               ))}
// //             </select>
// //           </div>

// //           {/* Status Filter */}
// //           <div className="flex items-center space-x-2 bg-slate-50 border border-slate-200 px-3.5 py-2.5 rounded-lg text-sm flex-1 md:flex-initial">
// //             <Filter size={15} className="text-slate-400" />
// //             <select 
// //               value={status} 
// //               onChange={(e) => setStatus(e.target.value)} 
// //               className="bg-transparent font-medium text-slate-700 focus:outline-none cursor-pointer text-xs"
// //             >
// //               {['All', 'Active', 'On Leave', 'Inactive'].map(s => (
// //                 <option key={s} value={s} className="bg-white text-slate-900">{s}</option>
// //               ))}
// //             </select>
// //           </div>

// //         </div>
// //       </div>

// //       <EmployeeTable employees={filtered} onViewEmployee={onViewEmployee} />
// //     </div>
// //   );
// // }
// import React, { useState } from 'react';
// import EmployeeTable from '../components/EmployeeTable';
// import { Search, Filter, UserPlus } from 'lucide-react';

// export default function Employees({ employees, onViewEmployee, onAddEmployee }) {
//   const [search, setSearch] = useState('');
//   const [dept, setDept] = useState('All');
//   const [status, setStatus] = useState('All');

//   const filtered = employees.filter(emp => {
//     const matchSearch = 
//       emp.name.toLowerCase().includes(search.toLowerCase()) ||
//       emp.id.toLowerCase().includes(search.toLowerCase()) ||
//       emp.email.toLowerCase().includes(search.toLowerCase());

//     const matchDept = dept === 'All' || emp.department === dept;
//     const matchStatus = status === 'All' || emp.status === status;

//     return matchSearch && matchDept && matchStatus;
//   });

//   return (
//     <div className="space-y-6 text-slate-900">
      
//       {/* Page Header */}
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//         <div>
//           <h1 className="text-2xl font-bold text-slate-900">Employees Directory</h1>
//           <p className="text-sm text-slate-500 mt-1">Manage all company employees, view profiles, and details.</p>
//         </div>
        
//         <button
//           onClick={onAddEmployee}
//           className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs tracking-wider transition-colors cursor-pointer self-start sm:self-auto shadow-md shadow-indigo-600/20"
//         >
//           <UserPlus size={15} />
//           <span>ADD EMPLOYEE</span>
//         </button>
//       </div>

//       {/* Search and Filters Bar */}
//       <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        
//         {/* Search Input */}
//         <div className="relative w-full md:w-96">
//           <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
//           <input
//             type="text"
//             placeholder="Search by Name, ID, or Email..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 transition-colors"
//           />
//         </div>

//         {/* Filters Wrapper */}
//         <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          
//           {/* Department Filter */}
//           <div className="flex items-center space-x-2 bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-lg text-sm flex-1 md:flex-initial">
//             <Filter size={15} className="text-slate-400" />
//             <select 
//               value={dept} 
//               onChange={(e) => setDept(e.target.value)} 
//               className="bg-transparent font-medium text-slate-700 focus:outline-none cursor-pointer text-xs"
//             >
//               <option value="All">All Departments</option>
//               {['Development', 'Design', 'HR', 'Marketing', 'Finance', 'Sales'].map(d => (
//                 <option key={d} value={d} className="bg-white text-slate-900">{d}</option>
//               ))}
//             </select>
//           </div>

//           {/* Status Filter */}
//           <div className="flex items-center space-x-2 bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-lg text-sm flex-1 md:flex-initial">
//             <Filter size={15} className="text-slate-400" />
//             <select 
//               value={status} 
//               onChange={(e) => setStatus(e.target.value)} 
//               className="bg-transparent font-medium text-slate-700 focus:outline-none cursor-pointer text-xs"
//             >
//               <option value="All">All Statuses</option>
//               {['Active', 'On Leave', 'Inactive'].map(s => (
//                 <option key={s} value={s} className="bg-white text-slate-900">{s}</option>
//               ))}
//             </select>
//           </div>

//         </div>
//       </div>

//       {/* Employee Table */}
//       <EmployeeTable employees={filtered} onViewEmployee={onViewEmployee} />
//     </div>
//   );
// }
import React, { useState } from 'react';
import EmployeeTable from '../components/EmployeeTable';
import { Search, Filter, UserPlus } from 'lucide-react';

export default function Employees({ employees, onViewEmployee, onAddEmployee }) {
  const [search, setSearch] = useState('');
  const [dept, setDept] = useState('All');
  const [status, setStatus] = useState('All');

  const filtered = employees.filter(emp => {
    const matchSearch = 
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.id.toLowerCase().includes(search.toLowerCase()) ||
      emp.email.toLowerCase().includes(search.toLowerCase());

    const matchDept = dept === 'All' || emp.department === dept;
    const matchStatus = status === 'All' || emp.status === status;

    return matchSearch && matchDept && matchStatus;
  });

  return (
    <div className="space-y-6 text-slate-900 pb-12 pt-2">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Employees Directory</h1>
          <p className="text-xs font-medium text-slate-600 mt-1">Manage all company employees, view profiles, and details.</p>
        </div>
        
        <button
          onClick={onAddEmployee}
          className="inline-flex items-center justify-center gap-2 bg-[#4F46E5] hover:bg-[#4338CA] text-white font-bold px-5 py-2.5 rounded-xl text-xs tracking-wider transition-all shadow-sm shadow-indigo-500/20 cursor-pointer self-start sm:self-auto"
        >
          <UserPlus size={15} />
          <span>ADD EMPLOYEE</span>
        </button>
      </div>

      {/* Search and Filters Bar */}
      <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        
        {/* Search Input */}
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input
            type="text"
            placeholder="Search by Name, ID, or Email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 transition-colors"
          />
        </div>

        {/* Filters Wrapper */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          
          {/* Department Filter */}
          <div className="flex items-center space-x-2 bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-lg text-sm flex-1 md:flex-initial">
            <Filter size={15} className="text-slate-400" />
            <select 
              value={dept} 
              onChange={(e) => setDept(e.target.value)} 
              className="bg-transparent font-medium text-slate-700 focus:outline-none cursor-pointer text-xs"
            >
              <option value="All">All Departments</option>
              {['Development', 'Design', 'HR', 'Marketing', 'Finance', 'Sales'].map(d => (
                <option key={d} value={d} className="bg-white text-slate-900">{d}</option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <div className="flex items-center space-x-2 bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-lg text-sm flex-1 md:flex-initial">
            <Filter size={15} className="text-slate-400" />
            <select 
              value={status} 
              onChange={(e) => setStatus(e.target.value)} 
              className="bg-transparent font-medium text-slate-700 focus:outline-none cursor-pointer text-xs"
            >
              <option value="All">All Statuses</option>
              {['Active', 'On Leave', 'Inactive'].map(s => (
                <option key={s} value={s} className="bg-white text-slate-900">{s}</option>
              ))}
            </select>
          </div>

        </div>
      </div>

      {/* Employee Table */}
      <EmployeeTable employees={filtered} onViewEmployee={onViewEmployee} />
    </div>
  );
}