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
        </div>
    </div>

    </>)
}
export default Dashboard;