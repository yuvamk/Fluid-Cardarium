import { Search, Bell } from "lucide-react";
import { ThemeToggle } from "./ThemeProvider";

export const Header = () => {
  return (
    <div className="h-16 bg-white dark:bg-navy border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-6 fixed top-0 right-0 left-64 transition-colors duration-200">
      <div className="relative w-96">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-navy-light border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors duration-200"
        />
      </div>
      
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <button className="relative p-2 hover:bg-gray-100 dark:hover:bg-navy-light rounded-lg transition-colors duration-200">
          <Bell size={20} className="text-gray-600 dark:text-gray-400" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
        </button>
        
        <div className="flex items-center gap-3">
          <img
            src="https://ui-avatars.com/api/?name=Admirra+John"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <div className="text-right">
            <p className="text-sm font-medium dark:text-white">Admirra John</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};