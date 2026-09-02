
// import React from 'react';
// import { LayoutDashboard, Users, UserPlus, LogOut } from 'lucide-react';

// export default function Sidebar({ activeTab, setActiveTab, onLogout, sidebarOpen, setSidebarOpen }) {
//   const menuItems = [
//     { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
//     { id: 'employees', label: 'Directory', icon: Users },
//     { id: 'add-employee', label: 'Add Employee', icon: UserPlus },
//   ];

//   return (
//     <>
//       {/* Mobile Backdrop */}
//       {sidebarOpen && (
//         <div 
//           onClick={() => setSidebarOpen(false)} 
//           className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm lg:hidden"
//         />
//       )}

//       {/* Sidebar Container - Navy Blue Corporate Theme */}
//       <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-[#0F172A] border-r border-slate-800/80 flex flex-col justify-between p-6 transition-transform duration-300 ease-in-out lg:translate-x-0 text-white ${
//         sidebarOpen ? 'translate-x-0' : '-translate-x-full'
//       }`}>
        
//         {/* Top Section: Logo & Nav */}
//         <div className="space-y-8">
//           {/* Logo Area */}
//           <div className="flex items-center space-x-3 px-2">
//             <div className="w-10 h-10 rounded-xl bg-[#2563EB] flex items-center justify-center text-white font-black text-lg shadow-lg shadow-blue-600/30">
//               EM
//             </div>
//             <div>
//               <h1 className="text-base font-black text-white tracking-tight">WorkPulse</h1>
//               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Admin Portal</p>
//             </div>
//           </div>

//           {/* Navigation Links */}
//           <nav className="space-y-1.5">
//             {menuItems.map((item) => {
//               const Icon = item.icon;
//               const isActive = activeTab === item.id;

//               return (
//                 <button
//                   key={item.id}
//                   onClick={() => {
//                     setActiveTab(item.id);
//                     setSidebarOpen(false);
//                   }}
//                   className={`w-full flex items-center space-x-3.5 px-4 py-3.5 rounded-2xl text-xs font-bold transition-all ${
//                     isActive
//                       ? 'bg-[#2563EB] text-white shadow-xl shadow-blue-600/30'
//                       : 'text-slate-300 bg-transparent hover:bg-slate-800/50 hover:text-white'
//                   }`}
//                 >
//                   <Icon size={18} className={isActive ? 'text-white' : 'text-slate-400'} />
//                   <span>{item.label}</span>
//                 </button>
//               );
//             })}
//           </nav>
//         </div>

//         {/* Bottom Section: Logout */}
//         <div className="pt-6 border-t border-slate-800/80">
//           <button
//             onClick={onLogout}
//             className="w-full flex items-center space-x-3.5 px-4 py-3.5 rounded-2xl text-xs font-bold text-rose-400 hover:bg-rose-500/10 transition-colors"
//           >
//             <LogOut size={18} />
//             <span>Logout Account</span>
//           </button>
//         </div>

//       </aside>
//     </>
//   );
// }
import React from 'react';
import { LayoutDashboard, Users, UserPlus, LogOut } from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab, onLogout, sidebarOpen, setSidebarOpen }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'employees', label: 'Directory', icon: Users },
    { id: 'add-employee', label: 'Add Employee', icon: UserPlus },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {sidebarOpen && (
        <div 
          onClick={() => setSidebarOpen(false)} 
          className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Sidebar Container - Optimized to 260px width with Indigo/Purple theme */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-[260px] bg-[#0F172A] border-r border-slate-800/80 flex flex-col justify-between p-6 transition-transform duration-300 ease-in-out lg:translate-x-0 text-white ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        
        {/* Top Section: Logo & Nav */}
        <div className="space-y-8">
          {/* Logo Area */}
          <div className="flex items-center space-x-3 px-2">
            <div className="w-10 h-10 rounded-xl bg-[#4F46E5] flex items-center justify-center text-white font-black text-lg shadow-lg shadow-indigo-600/30">
              EM
            </div>
            <div>
              <h1 className="text-base font-black text-white tracking-tight">WorkPulse</h1>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Admin Portal</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3.5 px-4 py-3.5 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#4F46E5] text-white shadow-xl shadow-indigo-600/30'
                      : 'text-slate-300 bg-transparent hover:bg-slate-800/50 hover:text-white'
                  }`}
                >
                  <Icon size={18} className={isActive ? 'text-white' : 'text-slate-400'} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Section: Logout */}
        <div className="pt-6 border-t border-slate-800/80">
          <button
            onClick={onLogout}
            className="w-full flex items-center space-x-3.5 px-4 py-3.5 rounded-2xl text-xs font-bold text-rose-400 hover:bg-rose-500/10 transition-colors cursor-pointer"
          >
            <LogOut size={18} />
            <span>Log Out</span>
          </button>
        </div>

      </aside>
    </>
  );
}