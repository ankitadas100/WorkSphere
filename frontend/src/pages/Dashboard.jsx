import EmployeeCharts from "./EmployeeCharts";
import RecentEmployees from "./RecentEmployees";
import "./Dashboard.css"
import {
  Users,
  UserCheck,
  CalendarDays,
  Building2,
  
} from "lucide-react";
function Dashboard(){
    return(<>
    <div className="dashboard">
        <h1 className="header">Welcome back, Admin!</h1>
        <p className="dashobard-para">Here's what's happening with your organization today.</p>
        <div className="card">
            <div className="dashboard-card">
                  <UserCheck className="card-icon" />
                 <h3>Total Employees</h3>
                    <h2>248</h2>
                    <p>+12 this month</p>
            </div>
            <div className="dashboard-card">
                  < CalendarDays className="card-icon" />
                <h3>present Today</h3>
                 <h2>18</h2>
                    <p>Currently on leave</p>
            </div>
            <div className="dashboard-card">
                <Building2 className="card-icon" />
                 <h3>Departments</h3>
                    <h2>12</h2>
                     <p>Across organization</p>
            </div>
        </div>
         <EmployeeCharts />
         <RecentEmployees />

    </div>

    </>)
}
export default Dashboard;