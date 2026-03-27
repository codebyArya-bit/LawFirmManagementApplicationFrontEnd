'use client';

import { usePathname } from 'next/navigation';
import { Bell, Search, LogOut } from 'lucide-react';

export default function AdvocateTopbar() {
  return (
    <header className="h-[72px] bg-white border-b border-gray-100 flex items-center justify-between px-8 shrink-0 sticky top-0 z-10">
      <div>
        <h1 className="text-base font-bold text-[#4a1c40] leading-tight">Advocate Dashboard</h1>
        <p className="text-xs text-gray-400 mt-0.5 hidden sm:block">Manage your case files, drafts, and client meetings.</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="hidden md:flex items-center gap-2 bg-[#f7f8fa] border border-gray-100 rounded-xl px-3 py-2 w-56">
          <Search className="w-3.5 h-3.5 text-gray-400 shrink-0" />
          <input type="text" placeholder="Search cases…" className="bg-transparent text-sm text-gray-600 outline-none w-full" />
        </div>
        <button className="relative w-9 h-9 rounded-xl bg-[#f7f8fa] border border-gray-100 flex items-center justify-center hover:bg-gray-100 transition-colors">
          <Bell className="w-4 h-4 text-gray-500" />
        </button>
        <div className="w-px h-6 bg-gray-100 mx-1" />
        <button className="flex items-center gap-2.5 pl-1 pr-3 py-1.5 rounded-xl hover:bg-gray-50 transition-colors">
          <div className="w-8 h-8 rounded-full bg-[#4a1c40] flex items-center justify-center text-white text-xs font-bold">AD</div>
          <span className="text-sm font-semibold text-[#4a1c40] hidden sm:block">Advocate</span>
        </button>
      </div>
    </header>
  );
}
