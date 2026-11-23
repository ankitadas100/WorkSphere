import {
  BriefcaseBusiness,
  LayoutDashboard,
  Users,
  Building2,
  CalendarCheck,
  CalendarDays,
  Wallet,
  ChartColumnBig,
  Settings,
  CircleHelp,
  LogOut
} from "lucide-react";

import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">

      {/* Logo */}
      <div className="sidebar-header">
        <h1 className="Main-logo">
          <BriefcaseBusiness className="logo-icon" />
          WorkSphere
        </h1>
      </div>

      {/* Main Menu */}
      <div className="sidebar-menu">
        <p className="menu-title">MAIN MENU</p>

        <NavLink to="/" className="sidebar-link">
          <LayoutDashboard />
          Dashboard
        </NavLink>

        <NavLink to="/employees" className="sidebar-link">
          <Users />
          Employees
        </NavLink>

        <NavLink to="/departments" className="sidebar-link">
          <Building2 />
          Departments
        </NavLink>

        <NavLink to="/attendance" className="sidebar-link">
          <CalendarCheck />
          Attendance
        </NavLink>

        <NavLink to="/leaves" className="sidebar-link">
          <CalendarDays />
          Leave Management
        </NavLink>

        <NavLink to="/payroll" className="sidebar-link">
          <Wallet />
          Payroll
        </NavLink>

        <NavLink to="/reports" className="sidebar-link">
          <ChartColumnBig />
          Reports
        </NavLink>
      </div>

      {/* System Menu */}
      <div className="sidebar-bottom">
        <p className="menu-title">SYSTEM</p>

        <NavLink to="/settings" className="sidebar-link">
          <Settings />
          Settings
        </NavLink>

        <NavLink to="/help" className="sidebar-link">
          <CircleHelp />
          Help & Support
        </NavLink>

        <div className="sidebar-link logout-link">
          <LogOut />
          Logout
        </div>
      </div>

    </div>
  );
}

export default Sidebar;