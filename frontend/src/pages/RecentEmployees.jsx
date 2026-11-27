import "./RecentEmployees.css"
function RecentEmployees() {
    const employees = [
        {
            id: "EMP001",
            name: "Rahul Sharma",
            department: "IT",
            status: "Active"
        },
        {
            id: "EMP002",
            name: "Priya Das",
            department: "HR",
            status: "Active"
        },
        {
            id: "EMP003",
            name: "Arjun Roy",
            department: "Finance",
            status: "On Leave"
        },
        {
            id: "EMP004",
            name: "Sneha Paul",
            department: "Marketing",
            status: "Active"
        }
    ]
    return (
        <div className="recemt-employees">
            <h2 className="employees-heading">Recent Employees</h2>
            <p className="employees-des">Recently added employees to your organization</p>
            <table className="employee-table">
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Department</th>
                        <th>Status</th>
                    </tr>
                </thead>
            </table>

        </div>
    )
}
export default RecentEmployees;