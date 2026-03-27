'use client';

import { Bell } from 'lucide-react';

export default function ClientTopbar() {
  return (
    <header className="h-[72px] bg-white border-b border-gray-100 flex items-center justify-between px-8 shrink-0 sticky top-0 z-10">
      <div>
        <h1 className="text-base font-bold text-[#1f2937] leading-tight">Welcome, Jane Doe</h1>
        <p className="text-xs text-gray-400 mt-0.5 hidden sm:block">Track your case progress and messages securely.</p>
      </div>
      <div className="flex items-center gap-4">
        <button className="relative w-9 h-9 rounded-xl bg-[#f7f8fa] border border-gray-100 flex items-center justify-center hover:bg-gray-100 transition-colors">
          <Bell className="w-4 h-4 text-gray-500" />
        </button>
        <div className="w-px h-6 bg-gray-100" />
        <button className="flex items-center gap-2.5 pl-1 pr-3 py-1.5 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200">
          <div className="w-8 h-8 rounded-full bg-[#1f2937] flex items-center justify-center text-white text-xs font-bold">JD</div>
        </button>
      </div>
    </header>
  );
}
