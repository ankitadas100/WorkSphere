import { TbLayoutDashboard } from "react-icons/tb";
function Sidebar() {
    return (<>
        <div>

            <div className="header">
                <div className="logo">
                    <TbLayoutDashboard />
                </div>

                <h1>WorkSphere</h1>
            </div>
            <div className="description">Employee Management</div>
            <hr></hr>
            <div className="list">MAIN MENU</div>
            <ui>
                <li>Dashboard</li>
                <li>Employees</li>
                <li>Departments</li>
                <li>Attendance</li>
                <li>Leave Management</li>
                <li>Payroll</li>
                <li>Reports</li>
            </ui>

        </div>
    </>)
}
export default Sidebar;