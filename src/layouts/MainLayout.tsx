import React from "react"
import { NavLink, Outlet } from "react-router-dom"
import { 
  LayoutDashboard, 
  CalendarCheck, 
  Network, 
  CalendarOff, 
  GraduationCap, 
  FolderOpen, 
  BellRing, 
  Target, 
  Users, 
  TrendingUp 
} from "lucide-react"
import { cn } from "../lib/utils"

const navItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Executive Planner", href: "/planner", icon: CalendarCheck },
  { name: "Organogram", href: "/organogram", icon: Network },
  { name: "Leave Management", href: "/leave", icon: CalendarOff },
  { name: "Training Calendar", href: "/training", icon: GraduationCap },
  { name: "File Storage", href: "/files", icon: FolderOpen },
  { name: "Notifications", href: "/notifications", icon: BellRing },
  { name: "Balanced Scorecard", href: "/scorecard", icon: Target },
  { name: "Employee Database", href: "/employees", icon: Users },
  { name: "Performance Management", href: "/performance", icon: TrendingUp },
]

export function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 flex-shrink-0 hidden md:flex md:flex-col">
        <div className="h-16 flex items-center px-6 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
              <Users className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg text-white leading-tight">
              People <br/><span className="text-sm font-medium text-slate-400">Governance</span>
            </span>
          </div>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary/20 text-primary"
                      : "text-slate-400 hover:bg-slate-800 hover:text-white"
                  )
                }
              >
                <Icon className="w-5 h-5" />
                {item.name}
              </NavLink>
            )
          })}
        </nav>
        
        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center gap-3 px-3 py-2 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-medium text-white">EA</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-white">Executive Admin</span>
              <span className="text-xs text-slate-400 truncate">admin@hrgov.com</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-8 flex-shrink-0">
          <h2 className="font-semibold text-white">HR Dashboard System</h2>
          <div className="flex items-center gap-4">
            <button className="text-slate-400 hover:text-white relative">
              <BellRing className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-destructive border-2 border-slate-900"></span>
            </button>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
