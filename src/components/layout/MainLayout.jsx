import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { 
  LayoutDashboard, Users, Network, Calendar, Clock, 
  Briefcase, Plane, TrendingUp, Target, Map, 
  GraduationCap, Heart, ShieldCheck, FileText, 
  Bell, Settings, Menu, X 
} from 'lucide-react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const MainLayout = () => {
  const [isSidebarOpenMobile, setIsSidebarOpenMobile] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleMobileSidebar = () => setIsSidebarOpenMobile(!isSidebarOpenMobile);
  const closeMobileSidebar = () => setIsSidebarOpenMobile(false);
  const toggleDesktopSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);

  const navItems = [
    { to: '/', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { to: '/employees', icon: <Users size={20} />, label: 'Employees' },
    { to: '/hierarchy', icon: <Network size={20} />, label: 'Organization' },
    { to: '/calendar', icon: <Calendar size={20} />, label: 'Calendar' },
    { to: '/attendance', icon: <Clock size={20} />, label: 'Attendance' },
    { to: '/recruitment', icon: <Briefcase size={20} />, label: 'Recruitment' },
    { to: '/leave', icon: <Plane size={20} />, label: 'Leave' },
    { to: '/performance', icon: <TrendingUp size={20} />, label: 'Performance' },
    { to: '/scorecard', icon: <Target size={20} />, label: 'Scorecard' },
    { to: '/planner', icon: <Map size={20} />, label: 'Planner' },
    { to: '/training', icon: <GraduationCap size={20} />, label: 'Training' },
    { to: '/welfare', icon: <Heart size={20} />, label: 'Welfare' },
    { to: '/iso', icon: <ShieldCheck size={20} />, label: 'ISO Tracking' },
    { to: '/notifications', icon: <Bell size={20} />, label: 'Notifications' },
    { to: '/reports', icon: <FileText size={20} />, label: 'Reports' },
    { to: '/settings', icon: <Settings size={20} />, label: 'Settings' },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50 overflow-hidden font-sans">
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpenMobile && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity"
          onClick={closeMobileSidebar}
        />
      )}

      {/* Sidebar - White Background Theme */}
      <aside className={twMerge(
        "fixed lg:static inset-y-0 left-0 z-50 bg-white border-r border-gray-200 transform transition-all duration-300 ease-in-out flex flex-col shrink-0",
        isSidebarOpenMobile ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        isSidebarCollapsed ? "w-20" : "w-64"
      )}>
        <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200 shrink-0">
          <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
            <div className="w-8 h-8 bg-primary text-white font-bold rounded flex items-center justify-center text-sm shadow-sm shrink-0">
              HR
            </div>
            {!isSidebarCollapsed && (
              <h1 className="text-xl font-bold text-gray-900 tracking-tight transition-opacity duration-300">
                Axis Solutions
              </h1>
            )}
          </div>
          <button onClick={closeMobileSidebar} className="lg:hidden text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>
        
        {/* Navigation scroll area using default browser scrollbar */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1 overflow-x-hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={closeMobileSidebar}
              title={isSidebarCollapsed ? item.label : undefined}
              className={({ isActive }) => clsx(
                "flex items-center px-4 py-3 rounded-lg font-medium transition-all duration-200 whitespace-nowrap",
                isActive 
                  ? "bg-primary text-white shadow-md shadow-primary/20" 
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
                isSidebarCollapsed ? "justify-center" : "gap-3"
              )}
            >
              <div className="shrink-0">{item.icon}</div>
              {!isSidebarCollapsed && <span>{item.label}</span>}
            </NavLink>
          ))}
        </nav>

        {/* Bottom User Area */}
        <div className="p-4 border-t border-gray-200 shrink-0">
          <div className={clsx("flex items-center", isSidebarCollapsed ? "justify-center" : "gap-3 px-4 py-2")}>
            <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs font-bold shadow-sm shrink-0">
              AD
            </div>
            {!isSidebarCollapsed && (
              <div className="overflow-hidden whitespace-nowrap">
                <p className="text-sm font-bold text-gray-900 leading-tight">Admin User</p>
                <p className="text-xs text-gray-500">Global Admin</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden transition-all duration-300">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center px-4 sm:px-6 lg:px-8 gap-4 shrink-0 transition-all">
          <button 
            onClick={toggleMobileSidebar}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Open sidebar"
          >
            <Menu size={24} />
          </button>

          <button 
            onClick={toggleDesktopSidebar}
            className="hidden lg:block p-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none transition-colors"
            aria-label="Toggle sidebar"
          >
            <Menu size={24} />
          </button>
          
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-gray-800 hidden sm:block">HR Governance Platform</h2>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-primary rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        {/* Dynamic Route Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 relative">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
