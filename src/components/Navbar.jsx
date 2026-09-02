
import React from 'react';
import { Menu, Sparkles } from 'lucide-react';

export default function Navbar({ activeTab, setSidebarOpen }) {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200/80 h-20 flex items-center justify-between px-6 sm:px-10 transition-all">
      <div className="flex items-center space-x-4">
        <button 
          onClick={() => setSidebarOpen(true)} 
          className="lg:hidden p-2.5 rounded-2xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors border border-slate-200 cursor-pointer"
        >
          <Menu size={22} />
        </button>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#4F46E5] flex items-center gap-1.5">
            <Sparkles size={12} className="animate-pulse" /> Command Center
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 capitalize tracking-tight mt-0.5">
            {activeTab === 'add-employee' ? 'Add Employee' : activeTab}
          </h2>
        </div>
      </div>

      {/* User Profile Section */}
      <div className="flex items-center space-x-3.5 bg-slate-50 border border-slate-200/80 py-1.5 px-4 rounded-full shadow-sm">
        <img 
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" 
          alt="Gopika S" 
          className="w-9 h-9 rounded-full object-cover ring-2 ring-indigo-500/30" 
        />
        <div className="hidden sm:block text-left">
          <p className="text-xs font-bold text-slate-900 leading-tight">Gopika S</p>
          <p className="text-[10px] font-semibold text-[#4F46E5]">Super Administrator</p>
        </div>
      </div>
    </header>
  );
}