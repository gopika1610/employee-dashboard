import React from 'react';
import { X, Mail, Phone, Building, Calendar, DollarSign, Award } from 'lucide-react';

export default function EmployeeModal({ employee, onClose }) {
  if (!employee) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
      <div className="bg-white border border-slate-200 w-full max-w-md rounded-[3rem] shadow-2xl shadow-slate-200/50 overflow-hidden relative">
        <div className="h-36 bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 relative p-6">
          <div className="absolute inset-0 bg-black/10"></div>
          <button onClick={onClose} className="absolute top-5 right-5 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full transition-colors backdrop-blur-md">
            <X size={18} />
          </button>
        </div>
        <div className="px-8 pb-8 pt-0 relative">
          <div className="flex justify-between items-end -mt-16 mb-5">
            <img src={employee.profileImage} alt={employee.name} className="w-28 h-28 rounded-[2rem] object-cover ring-4 ring-white shadow-xl bg-slate-100" />
            <span className="px-4 py-1.5 rounded-full text-xs font-black bg-emerald-50 text-emerald-600 border border-emerald-200 tracking-wide">{employee.status}</span>
          </div>

          <div>
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">{employee.name}</h3>
            <p className="text-xs font-bold text-indigo-600 mt-1 flex items-center gap-1.5">
              <Award size={15} /> {employee.position} <span className="text-slate-400 font-normal">({employee.id})</span>
            </p>
          </div>

          <div className="space-y-3.5 bg-slate-50 p-5 rounded-[2rem] text-xs font-semibold border border-slate-100 my-6">
            <div className="flex items-center space-x-3.5 text-slate-600"><Mail size={16} className="text-indigo-600"/><span className="text-slate-900">{employee.email}</span></div>
            <div className="flex items-center space-x-3.5 text-slate-600"><Phone size={16} className="text-indigo-600"/><span className="text-slate-900">{employee.phone}</span></div>
            <div className="flex items-center space-x-3.5 text-slate-600"><Building size={16} className="text-indigo-600"/><span className="text-slate-900">{employee.department}</span></div>
            <div className="flex items-center space-x-3.5 text-slate-600"><Calendar size={16} className="text-indigo-600"/><span className="text-slate-900">Joined: {employee.joiningDate}</span></div>
            <div className="flex items-center space-x-3.5 text-slate-600"><DollarSign size={16} className="text-indigo-600"/><span className="text-emerald-600 font-black text-sm">₹{employee.salary?.toLocaleString()} <span className="text-[10px] text-slate-400 font-semibold">/ month</span></span></div>
          </div>

          <button onClick={onClose} className="w-full py-4 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white rounded-2xl text-xs font-black tracking-wider uppercase shadow-xl shadow-indigo-600/30 transition-all">
            Close Profile
          </button>
        </div>
      </div>
    </div>
  );
}