
import React from 'react';
import { Eye } from 'lucide-react';

export default function EmployeeTable({ employees, onViewEmployee }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[780px]">
          <thead>
            <tr className="bg-slate-50 text-slate-500 text-xs font-semibold uppercase tracking-wider border-b border-slate-200">
              <th className="py-4 px-4 whitespace-nowrap">Employee</th>
              <th className="py-4 px-4 whitespace-nowrap">Contact Info</th>
              <th className="py-4 px-4 whitespace-nowrap">Department</th>
              <th className="py-4 px-4 whitespace-nowrap">Position</th>
              <th className="py-4 px-4 whitespace-nowrap">Joining Date</th>
              <th className="py-4 px-4 whitespace-nowrap">Status</th>
              <th className="py-4 px-4 text-right whitespace-nowrap">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {employees.map((emp) => (
              <tr key={emp.id} className="hover:bg-slate-50/80 transition-colors">
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-3">
                    <img src={emp.profileImage} alt={emp.name} className="w-10 h-10 rounded-lg object-cover border border-slate-200" />
                    <div>
                      <p className="font-semibold text-slate-900">{emp.name}</p>
                      <p className="text-xs text-slate-400">{emp.id}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <p className="text-slate-700 text-xs">{emp.email}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{emp.phone}</p>
                </td>
                <td className="py-4 px-4 whitespace-nowrap">
                  <span className="px-2.5 py-1 bg-slate-100 text-slate-700 border border-slate-200 rounded-md text-xs font-medium">
                    {emp.department}
                  </span>
                </td>
                <td className="py-4 px-4 text-slate-600 text-xs whitespace-nowrap">{emp.position}</td>
                <td className="py-4 px-4 text-slate-600 text-xs font-medium whitespace-nowrap">{emp.joiningDate}</td>
                <td className="py-4 px-4 whitespace-nowrap">
                  <span className={`inline-flex items-center whitespace-nowrap px-2.5 py-1 rounded-md text-xs font-medium ${
                    emp.status === 'Active' ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' : 'bg-amber-50 text-amber-600 border border-amber-200'
                  }`}>
                    {emp.status}
                  </span>
                </td>
                <td className="py-4 px-4 text-right whitespace-nowrap">
                  <button 
                    onClick={() => onViewEmployee(emp)} 
                    className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 rounded-lg text-xs font-medium transition-colors inline-flex items-center border border-slate-200"
                  >
                    <Eye size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}