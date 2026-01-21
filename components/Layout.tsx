import React, { useState } from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import { Student } from '../types';

interface LayoutProps {
  student: Student;
}

export const Layout: React.FC<LayoutProps> = ({ student }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { path: '/', icon: 'grid_view', label: 'Dashboard' },
    { path: '/krs', icon: 'article', label: 'KRS' },
    { path: '/khs', icon: 'grade', label: 'KHS' },
    { path: '/transkrip', icon: 'description', label: 'Transkrip' },
    { path: '/jadwal', icon: 'calendar_today', label: 'Jadwal' },
    { path: '/presensi', icon: 'how_to_reg', label: 'Presensi' },
    { path: '/keuangan', icon: 'payments', label: 'Keuangan' },
    { path: '/profil', icon: 'person', label: 'Profile' },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar */}
      <aside 
        className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 flex items-center gap-3">
            <div className="bg-primary size-10 rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/30">
              <span className="material-symbols-outlined">school</span>
            </div>
            <div>
              <h1 className="text-base font-bold leading-none text-text-main">SISKA</h1>
              <p className="text-xs text-text-muted mt-1">Univ. Mahasiswa</p>
            </div>
          </div>

          <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className={`
                    w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 font-medium text-sm
                    ${isActive 
                      ? 'bg-primary text-white shadow-md shadow-primary/20' 
                      : 'text-text-muted hover:bg-slate-50 hover:text-primary'}
                  `}
                >
                  <span className={`material-symbols-outlined ${isActive ? 'filled-icon' : ''}`}>
                    {item.icon}
                  </span>
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="p-4 border-t border-slate-100">
             <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-muted hover:bg-red-50 hover:text-red-500 transition-colors text-sm font-medium">
                <span className="material-symbols-outlined">logout</span>
                Logout
             </button>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-6 bg-white border-b border-slate-200 sticky top-0 z-30">
          <div className="flex items-center gap-4 flex-1">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 -ml-2 text-text-muted hover:text-primary"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="max-w-md w-full relative hidden md:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-[20px]">search</span>
              <input 
                type="text" 
                placeholder="Cari menu atau informasi..." 
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-background border-none focus:ring-2 focus:ring-primary/20 text-sm transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 rounded-lg hover:bg-background relative text-text-muted transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            
            <div className="h-8 w-[1px] bg-slate-200 mx-2 hidden sm:block"></div>
            
            <div className="flex items-center gap-3 cursor-pointer p-1 rounded-lg hover:bg-slate-50">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold leading-none text-text-main">{student.name}</p>
                <p className="text-xs text-text-muted mt-1">{student.nim}</p>
              </div>
              <div 
                className="size-10 rounded-full bg-cover bg-center ring-2 ring-slate-100"
                style={{ backgroundImage: `url(${student.avatarUrl})` }}
              />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8 scroll-smooth">
            <div className="max-w-7xl mx-auto w-full">
                 <Outlet />
            </div>
        </main>
      </div>
    </div>
  );
};
