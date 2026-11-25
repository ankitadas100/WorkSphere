import "./Dashboard.css"
function Dashboard(){
    return(<>
    <div className="dashboard">
        <h1 className="header">Welcome back, Admin!</h1>
        <p className="dashobard-para">Here's what's happening with your organization today.</p>
        <div className="card">
            <div className="dashboard-card">
                 <h3>Total Employees</h3>
                    <h2>248</h2>
                    <p>+12 this month</p>
            </div>
            <div className="dashboard-card">
                <h3>present Today</h3>
                 <h2>18</h2>
                    <p>Currently on leave</p>
            </div>
            <div className="dashboard-card">
                 <h3>Departments</h3>
                    <h2>12</h2>
            </div>
        </div>
    </div>

    </>)
}
export default Dashboard;