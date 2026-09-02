
import React from 'react';
import { X, Mail, Phone, Building, Calendar, DollarSign, Award } from 'lucide-react';

export default function EmployeeModal({ employee, onClose }) {
  if (!employee) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
      <div className="bg-white border border-slate-200 w-full max-w-md rounded-[2.5rem] shadow-2xl shadow-slate-200/50 overflow-hidden relative">
        
        {/* Header Banner - Original Indigo/Violet Brand Gradient & Compact Height */}
        <div className="h-32 bg-gradient-to-r from-[#5146E5] to-[#6D28D9] relative p-6">
          <div className="absolute inset-0 bg-black/10"></div>
          <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full transition-colors backdrop-blur-md">
            <X size={16} />
          </button>
        </div>

        <div className="px-8 pb-8 pt-0 relative">
          <div className="flex justify-between items-end -mt-14 mb-4">
            <img src={employee.profileImage} alt={employee.name} className="w-24 h-24 rounded-[2rem] object-cover ring-4 ring-white shadow-xl bg-slate-100" />
            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600 border border-emerald-200 tracking-wide">{employee.status}</span>
          </div>

          <div>
            {/* Balanced font size & weight */}
            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">{employee.name}</h3>
            <p className="text-xs font-semibold text-[#5146E5] mt-0.5 flex items-center gap-1.5">
              <Award size={14} /> {employee.position} <span className="text-slate-400 font-normal">({employee.id})</span>
            </p>
          </div>

          <div className="space-y-3 bg-slate-50 p-4.5 rounded-[2rem] text-xs font-medium border border-slate-100 my-5">
            <div className="flex items-center space-x-3 text-slate-600"><Mail size={15} className="text-[#5146E5]"/><span className="text-slate-900">{employee.email}</span></div>
            <div className="flex items-center space-x-3 text-slate-600"><Phone size={15} className="text-[#5146E5]"/><span className="text-slate-900">{employee.phone}</span></div>
            <div className="flex items-center space-x-3 text-slate-600"><Building size={15} className="text-[#5146E5]"/><span className="text-slate-900">{employee.department}</span></div>
            <div className="flex items-center space-x-3 text-slate-600"><Calendar size={15} className="text-[#5146E5]"/><span className="text-slate-900">Joined: {employee.joiningDate}</span></div>
            <div className="flex items-center space-x-3 text-slate-600"><DollarSign size={15} className="text-[#5146E5]"/><span className="text-emerald-600 font-bold text-sm">₹{employee.salary?.toLocaleString()} <span className="text-[10px] text-slate-400 font-medium">/ month</span></span></div>
          </div>

          <button onClick={onClose} className="w-full py-3.5 bg-gradient-to-r from-[#5146E5] to-[#6D28D9] hover:opacity-90 text-white rounded-2xl text-xs font-bold tracking-wider uppercase shadow-lg shadow-[#5146E5]/30 transition-all">
            Close Profile
          </button>
        </div>
      </div>
    </div>
  );
}