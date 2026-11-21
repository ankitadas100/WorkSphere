
import { useState } from "react";
import {
  Search,
  Bell,
  ChevronDown,
  UserRound,
  Activity,
  Settings,
  LogOut
} from "lucide-react";
import "./Navbar.css";

function Navbar() {
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);

  return (
    <header className="ws-navbar">
      
      <div className="ws-navbar-heading">
        <h1>Dashboard</h1>
        <p>Welcome back! Here's your company overview.</p>
      </div>

     
      <div className="ws-navbar-actions">

       
        <div className="ws-search">
          <Search size={19} />
          <input
            type="text"
            placeholder="Search anything..."
          />
        </div>

        
        <div className="ws-notification-wrapper">
          <button
            className={`ws-notification-btn ${
              notificationOpen ? "selected" : ""
            }`}
            onClick={() => {
              setNotificationOpen(!notificationOpen);
              setProfileOpen(false);
            }}
            aria-label="Notifications"
          >
            <Bell size={21} />
            <span className="ws-notification-count">2</span>
          </button>

          {notificationOpen && (
            <div className="ws-notification-dropdown">
              <div className="ws-dropdown-header">
                <h3>Notifications</h3>
                <span>2 new</span>
              </div>

              <div className="ws-notification-item">
                <span className="ws-notification-icon leave-icon">
                  <Bell size={16} />
                </span>
                <div>
                  <h4>Leave Request</h4>
                  <p>3 leave requests are waiting for approval.</p>
                  <span className="ws-notification-time">
                    Just now
                  </span>
                </div>
              </div>

              <div className="ws-notification-item">
                <span className="ws-notification-icon employee-icon">
                  <UserRound size={16} />
                </span>
                <div>
                  <h4>New Employee</h4>
                  <p>A new employee was added to the system.</p>
                  <span className="ws-notification-time">
                    1 hour ago
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

     
        <div className="ws-profile-wrapper">
          <button
            className="ws-profile-btn"
            onClick={() => {
              setProfileOpen(!profileOpen);
              setNotificationOpen(false);
            }}
          >
            <div className="ws-avatar">A</div>

            <div className="ws-profile-details">
              <h4>Admin</h4>
              <span>HR Manager</span>
            </div>

            <ChevronDown
              size={17}
              className={`ws-chevron ${
                profileOpen ? "rotate" : ""
              }`}
            />
          </button>

          
          {profileOpen && (
            <div className="ws-profile-dropdown">
              <button className="ws-dropdown-item">
                <UserRound size={18} />
                <span>My Profile</span>
              </button>

              <button className="ws-dropdown-item">
                <Activity size={18} />
                <span>Activity Logs</span>
              </button>

              <button className="ws-dropdown-item">
                <Settings size={18} />
                <span>Settings</span>
              </button>

              <div className="ws-dropdown-divider"></div>

              <button className="ws-dropdown-item ws-logout">
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>

      </div>
    </header>
  );
}

export default Navbar;
