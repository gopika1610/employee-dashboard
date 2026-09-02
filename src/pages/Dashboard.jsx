
// import React from 'react';
// import StatCard from '../components/StatCard';
// import EmployeeTable from '../components/EmployeeTable';
// import { Users, UserCheck, UserX, Building2, ArrowRight } from 'lucide-react';

// export default function Dashboard({ employees, onViewEmployee, setActiveTab }) {
//   const total = employees.length;
//   const active = employees.filter(e => e.status === 'Active').length;
//   const leave = employees.filter(e => e.status === 'On Leave').length;
//   const depts = new Set(employees.map(e => e.department)).size;

//   const recentEmployees = [...employees].reverse().slice(0, 5);

//   return (
//     <div className="space-y-8 animate-fade-in text-slate-900">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         <StatCard label="Total Employees" value={total} icon={Users} color="text-blue-600" bg="bg-blue-50" />
//         <StatCard label="Active Status" value={active} icon={UserCheck} color="text-emerald-600" bg="bg-emerald-50" />
//         <StatCard label="On Leave" value={leave} icon={UserX} color="text-amber-600" bg="bg-amber-50" />
//         <StatCard label="Departments" value={depts} icon={Building2} color="text-indigo-600" bg="bg-indigo-50" />
//       </div>

//       <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden">
//         <div className="p-6 sm:p-8 flex items-center justify-between border-b border-slate-100">
//           <div>
//             <h3 className="text-xl font-black text-slate-900 tracking-tight">Recent Employees</h3>
//             <p className="text-xs font-semibold text-slate-500 mt-0.5">Latest additions to the global directory</p>
//           </div>
//           <button onClick={() => setActiveTab('employees')} className="flex items-center space-x-1.5 text-xs font-black uppercase tracking-wider text-indigo-600 hover:text-indigo-700 bg-indigo-50 border border-indigo-100 px-4 py-2.5 rounded-xl transition-all">
//             <span>View All</span>
//             <ArrowRight size={14} />
//           </button>
//         </div>
//         <EmployeeTable employees={recentEmployees} onViewEmployee={onViewEmployee} />
//       </div>
//     </div>
//   );
// }
import React from 'react';
import StatCard from '../components/StatCard';
import EmployeeTable from '../components/EmployeeTable';
import { Users, UserCheck, UserX, Building2, ArrowRight } from 'lucide-react';

export default function Dashboard({ employees, onViewEmployee, setActiveTab }) {
  const total = employees.length;
  const active = employees.filter(e => e.status === 'Active').length;
  const leave = employees.filter(e => e.status === 'On Leave').length;
  const depts = new Set(employees.map(e => e.department)).size;

  const recentEmployees = [...employees].reverse().slice(0, 5);

  return (
    <div className="space-y-10 animate-fade-in text-slate-900 pb-12 pt-2">
      
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard label="Total Employees" value={total} icon={Users} color="text-indigo-600" bg="bg-indigo-50/80 border-indigo-100" />
        <StatCard label="Active Status" value={active} icon={UserCheck} color="text-emerald-600" bg="bg-emerald-50/80 border-emerald-100" />
        <StatCard label="On Leave" value={leave} icon={UserX} color="text-amber-600" bg="bg-amber-50/80 border-amber-100" />
        <StatCard label="Departments" value={depts} icon={Building2} color="text-blue-600" bg="bg-blue-50/80 border-blue-100" />
      </div>

      {/* Recent Employees Section with compact header padding */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
        {/* Tighter padding here: py-4 sm:py-5 instead of p-7 */}
        <div className="px-6 py-4 sm:px-6 sm:py-5 flex items-center justify-between border-b border-slate-100 bg-slate-50/40">
          <div>
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">Recent Employees</h3>
            <p className="text-xs font-medium text-slate-600 mt-0.5">Latest additions to the global directory</p>
          </div>
          
          <button 
            onClick={() => setActiveTab('employees')} 
            className="inline-flex items-center justify-center gap-2 bg-[#4F46E5] hover:bg-[#4338CA] text-white font-bold px-5 py-2.5 rounded-xl text-xs tracking-wider transition-all shadow-sm shadow-indigo-500/20 cursor-pointer"
          >
            <span>VIEW ALL</span>
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="p-4 sm:p-6">
          <EmployeeTable employees={recentEmployees} onViewEmployee={onViewEmployee} />
        </div>
      </div>

    </div>
  );
}