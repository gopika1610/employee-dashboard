
import React from 'react';

export default function StatCard({ label, value, icon: Icon, color, bg }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
      <div>
        <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">{label}</p>
        <h3 className="text-2xl font-bold text-slate-900 mt-1">{value}</h3>
      </div>
      <div className={`p-3 rounded-lg ${bg} ${color}`}>
        <Icon size={22} />
      </div>
    </div>
  );
}