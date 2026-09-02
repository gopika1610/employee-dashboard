import React, { useState } from 'react';
import { Lock, Mail, ArrowRight, Sparkles } from 'lucide-react';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }
    setError('');
    onLogin();
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background glow effects matching the workspace */}
      <div className="absolute w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[140px] pointer-events-none -top-40 -left-40 animate-pulse"></div>
      <div className="absolute w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none -bottom-40 -right-40"></div>

      <div className="bg-slate-900/80 backdrop-blur-xl w-full max-w-md rounded-2xl p-8 shadow-xl border border-slate-800 relative z-10 text-white">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-indigo-600 mx-auto flex items-center justify-center text-white font-bold text-lg shadow-sm mb-4">EM</div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 flex items-center justify-center gap-1.5">
            <Sparkles size={12} /> Secure Authentication
          </span>
          <h2 className="text-2xl font-bold text-white mt-1 tracking-tight">Welcome Back</h2>
          <p className="text-xs text-slate-400 mt-1">Sign in to your admin workspace</p>
        </div>

        {error && (
          <div className="mb-6 p-3 bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs rounded-lg font-medium text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="admin@workpulse.com" 
                className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-sm font-medium text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors" 
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="••••••••" 
                className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-sm font-medium text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors" 
              />
            </div>
          </div>

          {/* Remember me & Forgot Password */}
          <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" className="rounded bg-slate-950 border-slate-800 text-indigo-600 focus:ring-0 cursor-pointer" />
              <span>Remember me</span>
            </label>
            <a href="#forgot" onClick={(e) => e.preventDefault()} className="text-indigo-400 hover:underline">Forgot password?</a>
          </div>

          <button 
            type="submit" 
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-semibold text-xs tracking-wide shadow-sm flex items-center justify-center space-x-2 transition-colors mt-2"
          >
            <span>LOGIN</span>
            <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}