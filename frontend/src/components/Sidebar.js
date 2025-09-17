import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Settings, Users, Truck, BarChart3, MapPin, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const Sidebar = () => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  
  const menuItems = [
    {
      path: '/admin',
      label: 'Admin Dashboard',
      icon: Settings,
      color: 'text-slate-700 hover:text-slate-900'
    },
    {
      path: '/users',
      label: 'Users Dashboard',
      icon: Users,
      color: 'text-slate-700 hover:text-slate-900'
    },
    {
      path: '/staff',
      label: 'Staff Dashboard',
      icon: Truck,
      color: 'text-slate-700 hover:text-slate-900'
    }
  ];

  return (
    <div className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-700 h-screen fixed left-0 top-0 overflow-y-auto">
      <div className="p-6 border-b border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-slate-900 dark:bg-slate-100 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white dark:text-slate-900" />
            </div>
            <span className="text-lg font-bold text-slate-900 dark:text-white">where-is-my-bus</span>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-slate-400 hover:text-slate-600 dark:text-slate-300 dark:hover:text-slate-100" />
            ) : (
              <Moon className="w-4 h-4 text-slate-600 hover:text-slate-900" />
            )}
          </button>
        </div>
      </div>
      
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-lg'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-200">
        <div className="flex items-center space-x-3 px-4 py-2">
          <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
            <MapPin className="w-4 h-4 text-slate-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-900">Transport Admin</p>
            <p className="text-xs text-slate-500">System Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;