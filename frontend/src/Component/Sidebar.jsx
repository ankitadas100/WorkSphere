function Sidebar(){
    return(<>
    <div>
        <div className="logo"></div>
        <h1 className="header">WorkSphere</h1>
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