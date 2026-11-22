import { BriefcaseBusiness, LayoutDashboard, Users, Building2, CalendarCheck, Wallet, Settings, ChartColumnBig } from "lucide-react";
import "./Sidebar.css"
function Sidebar() {
    return (<>
        <div className="sidebar">

            <div className="header">
                <h1 className="Main-logo">
                    <BriefcaseBusiness className="logo-icon" />
                    WorkSphere
                </h1>
            </div>
            <div className="description">Employee Management</div>
            <hr></hr>
            <div className="list">MAIN MENU</div>
            <ui>

                <li className="logo"><LayoutDashboard />Dashboard</li>
                <li className="logo"><Users />Employees</li>
                <li className="logo"> <Building2 />Departments</li>
                <li className="logo"><CalendarCheck />Attendance</li>
                <li className="logo"><Wallet />Leave Management</li>
                <li className="logo"><Settings />Payroll</li>
                <li className="logo"><ChartColumnBig />Reports</li>
            </ui>

        </div>
    </>)
}
export default Sidebar;