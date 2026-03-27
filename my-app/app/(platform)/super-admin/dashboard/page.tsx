import { Briefcase, Users, FileText, CheckSquare, ArrowRight, Gavel, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function SuperAdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Profile/Firm Header */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-[#984c1f]/10 flex items-center justify-center text-[#984c1f] text-xl font-bold">
            CA
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Chen & Associates</h1>
            <p className="text-sm text-gray-500 mt-1">Reg No: BC/1842/2010 • Civil & Corporate Law</p>
          </div>
        </div>
        <Link href="/super-admin/settings" className="px-4 py-2 border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50">
          Edit Profile
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Cases detail card */}
        <div className="col-span-2 bg-[#984c1f] rounded-2xl p-6 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" />
          <div className="relative z-10 flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-white/80 mb-1">Total Cases</p>
              <p className="text-4xl font-bold">142</p>
              <div className="flex items-center gap-3 mt-4 text-xs font-semibold">
                <span className="bg-white/20 px-2 py-1 rounded-lg">45 Running</span>
                <span className="bg-white/20 px-2 py-1 rounded-lg">82 Disposed Off</span>
                <span className="bg-white/20 px-2 py-1 rounded-lg">15 Closed</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        {/* Normal stat cards */}
        {[
          { label: 'Total Clients',   val: '88',  icon: Users,      color: 'bg-emerald-500' },
          { label: 'Total Documents', val: '430', icon: FileText,   color: 'bg-blue-500' },
          { label: 'Team Members',    val: '12',  icon: Users,      color: 'bg-purple-500' },
          { label: 'Pending To-dos',  val: '15',  icon: CheckSquare,color: 'bg-amber-500' },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 relative overflow-hidden group hover:border-[#984c1f]/30 transition-colors">
            <div className={`w-10 h-10 ${stat.color} rounded-xl flex items-center justify-center mb-4 text-white shadow-sm transition-transform group-hover:scale-110`}>
              <stat.icon className="w-5 h-5" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{stat.val}</p>
            <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-sm font-bold text-gray-900">Upcoming Hearings & To-dos</h2>
          </div>
          <div className="divide-y divide-gray-50">
            {[
              { title: 'Hearing: State vs Kumar', date: 'Today, 10:30 AM',  type: 'Hearing', icon: Gavel, color: 'text-red-600 bg-red-50' },
              { title: 'Draft Review: TechCorp NDA', date: 'Tomorrow',       type: 'To-do',   icon: FileText, color: 'text-amber-600 bg-amber-50' },
              { title: 'Client Meeting: Sarah Jenkins', date: '21 Mar, 2:00 PM',type: 'Meeting', icon: Users, color: 'text-blue-600 bg-blue-50' },
            ].map((t, i) => (
              <div key={i} className="flex items-center gap-4 px-6 py-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${t.color}`}>
                  <t.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">{t.title}</h3>
                  <div className="flex items-center gap-2 mt-0.5 text-xs text-gray-500">
                    <Calendar className="w-3.5 h-3.5" /> {t.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100">
            <h2 className="text-sm font-bold text-gray-900">Quick Actions</h2>
          </div>
          <div className="p-4 space-y-2">
            {[
              { label: 'Create New Case',   href: '/super-admin/cases' },
              { label: 'Add Team Member',   href: '/super-admin/team' },
              { label: 'Register Client',   href: '/super-admin/clients' },
              { label: 'Generate Invoice',  href: '/super-admin/billing' },
            ].map(({ label, href }) => (
              <Link key={label} href={href} className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-semibold bg-[#f7f8fa] text-gray-700 hover:bg-gray-100 border border-gray-100 transition-colors">
                {label} <ArrowRight className="w-4 h-4 opacity-50" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
