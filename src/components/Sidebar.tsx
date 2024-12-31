import { LayoutDashboard, Users, Calendar, Building2, HeadphonesIcon, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-64 h-screen bg-white dark:bg-navy border-r border-gray-200 dark:border-gray-800 fixed left-0 top-0 p-6">
      <div className="flex items-center gap-2 mb-8">
        <img src="/lovable-uploads/0e1a42f5-fb47-426d-9d25-1f78bb551d03.png" alt="Logo" className="w-8 h-8" />
        <span className="text-xl font-semibold text-gray-900 dark:text-white">Vasitum</span>
      </div>

      <div className="space-y-1">
        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 px-4 mb-2">MAIN MENU</p>
        <Link to="/" className={`sidebar-link ${isActive("/") ? "active" : ""}`}>
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </Link>
        <Link to="/recruitment" className={`sidebar-link ${isActive("/recruitment") ? "active" : ""}`}>
          <Users size={20} />
          <span>Recruitment</span>
        </Link>
        <Link to="/schedule" className={`sidebar-link ${isActive("/schedule") ? "active" : ""}`}>
          <Calendar size={20} />
          <span>Schedule</span>
        </Link>
        <Link to="/employee" className={`sidebar-link ${isActive("/employee") ? "active" : ""}`}>
          <Users size={20} />
          <span>Employee</span>
        </Link>
        <Link to="/department" className={`sidebar-link ${isActive("/department") ? "active" : ""}`}>
          <Building2 size={20} />
          <span>Department</span>
        </Link>
      </div>

      <div className="mt-8 space-y-1">
        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 px-4 mb-2">OTHER</p>
        <Link to="/support" className={`sidebar-link ${isActive("/support") ? "active" : ""}`}>
          <HeadphonesIcon size={20} />
          <span>Support</span>
        </Link>
        <Link to="/settings" className={`sidebar-link ${isActive("/settings") ? "active" : ""}`}>
          <Settings size={20} />
          <span>Settings</span>
        </Link>
      </div>
    </div>
  );
};