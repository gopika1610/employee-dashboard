
// import React, { useState } from 'react';
// import { UserPlus } from 'lucide-react';

// export default function AddEmployee({ onAddEmployee, setActiveTab }) {
//   const [form, setForm] = useState({
//     name: '', email: '', phone: '', department: 'Development', position: '', joiningDate: '', salary: '', status: 'Active',
//     profileImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'
//   });
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!form.name || !form.email || !form.phone || !form.position || !form.joiningDate || !form.salary) {
//       setError('Please fill in all required fields.');
//       return;
//     }
//     if (Number(form.salary) <= 0) {
//       setError('Salary must be a positive number.');
//       return;
//     }
//     setError('');

//     const newEmp = { ...form, id: `EMP${Math.floor(100 + Math.random() * 900)}`, salary: Number(form.salary) };
//     onAddEmployee(newEmp);
//     setActiveTab('employees');
//   };

//   return (
//     <div className="max-w-3xl mx-auto bg-white p-8 sm:p-10 rounded-[3rem] border border-slate-200 shadow-xl shadow-slate-200/50 animate-fade-in text-slate-900">
//       <div className="flex items-center space-x-4 mb-8 pb-6 border-b border-slate-100">
//         <div className="p-4 bg-indigo-50 text-indigo-600 rounded-2xl border border-indigo-100"><UserPlus size={24} /></div>
//         <div>
//           <h3 className="text-xl font-black text-slate-900 tracking-tight">Add New Employee</h3>
//           <p className="text-xs font-semibold text-slate-500 mt-0.5">Register a new team member record to the portal</p>
//         </div>
//       </div>

//       {error && (
//         <div className="mb-6 p-4 bg-rose-50 border border-rose-100 text-rose-600 text-xs rounded-2xl font-bold text-center">
//           {error}
//         </div>
//       )}

//       <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//         <div>
//           <label className="block text-[11px] font-black text-slate-500 uppercase tracking-wider mb-2">Full Name *</label>
//           <input type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Rajesh Kumar" className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all" />
//         </div>
//         <div>
//           <label className="block text-[11px] font-black text-slate-500 uppercase tracking-wider mb-2">Email *</label>
//           <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="rajesh@example.com" className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all" />
//         </div>
//         <div>
//           <label className="block text-[11px] font-black text-slate-500 uppercase tracking-wider mb-2">Phone *</label>
//           <input type="text" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="+91 98765 43210" className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all" />
//         </div>
//         <div>
//           <label className="block text-[11px] font-black text-slate-500 uppercase tracking-wider mb-2">Department *</label>
//           <select value={form.department} onChange={e => setForm({...form, department: e.target.value})} className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all cursor-pointer">
//             {['Development', 'Design', 'HR', 'Marketing', 'Finance', 'Sales'].map(d => <option key={d} value={d} className="bg-white text-slate-900">{d}</option>)}
//           </select>
//         </div>
//         <div>
//           <label className="block text-[11px] font-black text-slate-500 uppercase tracking-wider mb-2">Position *</label>
//           <input type="text" value={form.position} onChange={e => setForm({...form, position: e.target.value})} placeholder="Frontend Engineer" className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all" />
//         </div>
//         <div>
//           <label className="block text-[11px] font-black text-slate-500 uppercase tracking-wider mb-2">Joining Date *</label>
//           <input type="date" value={form.joiningDate} onChange={e => setForm({...form, joiningDate: e.target.value})} className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all" />
//         </div>
//         <div>
//           <label className="block text-[11px] font-black text-slate-500 uppercase tracking-wider mb-2">Salary (₹/mo) *</label>
//           <input type="number" value={form.salary} onChange={e => setForm({...form, salary: e.target.value})} placeholder="75000" className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all" />
//         </div>
//         <div>
//           <label className="block text-[11px] font-black text-slate-500 uppercase tracking-wider mb-2">Status *</label>
//           <select value={form.status} onChange={e => setForm({...form, status: e.target.value})} className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all cursor-pointer">
//             {['Active', 'On Leave', 'Inactive'].map(s => <option key={s} value={s} className="bg-white text-slate-900">{s}</option>)}
//           </select>
//         </div>
//         <div className="sm:col-span-2 pt-6 flex items-center justify-end space-x-3">
//           <button type="button" onClick={() => setActiveTab('employees')} className="px-6 py-4 border border-slate-200 rounded-2xl text-xs font-black uppercase tracking-wider text-slate-600 hover:bg-slate-50 transition-colors">Cancel</button>
//           <button type="submit" className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white rounded-2xl text-xs font-black uppercase tracking-wider shadow-xl shadow-indigo-600/30 transition-all">Save Employee</button>
//         </div>
//       </form>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { UserPlus } from 'lucide-react';

export default function AddEmployee({ onAddEmployee, setActiveTab }) {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', department: 'Development', position: '', joiningDate: '', salary: '', status: 'Active',
    profileImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.position || !form.joiningDate || !form.salary) {
      setError('Please fill in all required fields.');
      return;
    }
    if (Number(form.salary) <= 0) {
      setError('Salary must be a positive number.');
      return;
    }
    setError('');

    const newEmp = { ...form, id: `EMP${Math.floor(100 + Math.random() * 900)}`, salary: Number(form.salary) };
    onAddEmployee(newEmp);
    setActiveTab('employees');
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 sm:p-10 rounded-[3rem] border border-slate-200/80 shadow-xl shadow-slate-200/50 animate-fade-in text-slate-900">
      <div className="flex items-center space-x-4 mb-8 pb-6 border-b border-slate-100">
        <div className="p-4 bg-[#EEF0FF] text-[#5146E5] rounded-2xl border border-indigo-100">
          <UserPlus size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900 tracking-tight">Add New Employee</h3>
          <p className="text-xs font-semibold text-slate-500 mt-0.5">Register a new team member record to the portal</p>
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-rose-50 border border-rose-100 text-rose-600 text-xs rounded-2xl font-bold text-center">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name *</label>
          <input type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Rajesh Kumar" className="w-full px-4 py-3.5 bg-[#F8FAFC] border border-slate-200 rounded-2xl text-sm font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5146E5] focus:bg-white transition-all" />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Email *</label>
          <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="rajesh@example.com" className="w-full px-4 py-3.5 bg-[#F8FAFC] border border-slate-200 rounded-2xl text-sm font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5146E5] focus:bg-white transition-all" />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Phone *</label>
          <input type="text" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="+91 98765 43210" className="w-full px-4 py-3.5 bg-[#F8FAFC] border border-slate-200 rounded-2xl text-sm font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5146E5] focus:bg-white transition-all" />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Department *</label>
          <select value={form.department} onChange={e => setForm({...form, department: e.target.value})} className="w-full px-4 py-3.5 bg-[#F8FAFC] border border-slate-200 rounded-2xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#5146E5] transition-all cursor-pointer">
            {['Development', 'Design', 'HR', 'Marketing', 'Finance', 'Sales'].map(d => <option key={d} value={d} className="bg-white text-slate-900">{d}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Position *</label>
          <input type="text" value={form.position} onChange={e => setForm({...form, position: e.target.value})} placeholder="Frontend Engineer" className="w-full px-4 py-3.5 bg-[#F8FAFC] border border-slate-200 rounded-2xl text-sm font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5146E5] focus:bg-white transition-all" />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Joining Date *</label>
          <input type="date" value={form.joiningDate} onChange={e => setForm({...form, joiningDate: e.target.value})} className="w-full px-4 py-3.5 bg-[#F8FAFC] border border-slate-200 rounded-2xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#5146E5] focus:bg-white transition-all" />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Salary (₹/mo) *</label>
          <input type="number" value={form.salary} onChange={e => setForm({...form, salary: e.target.value})} placeholder="75000" className="w-full px-4 py-3.5 bg-[#F8FAFC] border border-slate-200 rounded-2xl text-sm font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5146E5] focus:bg-white transition-all" />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Status *</label>
          <select value={form.status} onChange={e => setForm({...form, status: e.target.value})} className="w-full px-4 py-3.5 bg-[#F8FAFC] border border-slate-200 rounded-2xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#5146E5] transition-all cursor-pointer">
            {['Active', 'On Leave', 'Inactive'].map(s => <option key={s} value={s} className="bg-white text-slate-900">{s}</option>)}
          </select>
        </div>
        <div className="sm:col-span-2 pt-6 flex items-center justify-end space-x-3">
          <button type="button" onClick={() => setActiveTab('employees')} className="px-6 py-4 border border-slate-200 rounded-2xl text-xs font-bold uppercase tracking-wider text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer">Cancel</button>
          <button type="submit" className="px-8 py-4 bg-[#5146E5] hover:bg-[#4338CA] text-white rounded-2xl text-xs font-bold uppercase tracking-wider shadow-xl shadow-indigo-600/20 transition-all cursor-pointer">Save Employee</button>
        </div>
      </form>
    </div>
  );
}
