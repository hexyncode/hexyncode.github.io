import React from 'react';
import { DashboardIcon, TicketIcon, SettingsIcon } from './Icons'; // Assumes icons are in separate files

export const Sidebar = () => {
  const navItems = [
    { name: 'Dashboard', icon: DashboardIcon, active: true },
    { name: 'Tickets', icon: TicketIcon, active: false },
    { name: 'Settings', icon: SettingsIcon, active: false },
  ];

  return (
    <aside className="w-64 flex-shrink-0 bg-gray-900 p-6 hidden md:flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-10">
           <div className="bg-violet-600 p-2 rounded-lg">
             <TicketIcon className="h-6 w-6 text-white" />
           </div>
           <h1 className="text-xl font-bold text-white">Helpdesk</h1>
        </div>
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href="#"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                item.active
                  ? 'bg-violet-600 text-white'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.name}</span>
            </a>
          ))}
        </nav>
      </div>
       <div className="border-t border-gray-700 pt-6">
          <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-gray-400 hover:bg-gray-800 hover:text-white"
            >
              <SettingsIcon className="h-5 w-5" />
              <span className="font-medium">Settings</span>
            </a>
       </div>
    </aside>
  );
};