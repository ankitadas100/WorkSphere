import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import "./EmployeeCharts.css"
function EmployeeCharts(){
 const attendanceData = [
    { day: "Mon", employees: 210 },
    { day: "Tue", employees: 195 },
    { day: "Wed", employees: 220 },
    { day: "Thu", employees: 205 },
    { day: "Fri", employees: 218 },
    { day: "Sat", employees: 180 },
    { day: "Sun", employees: 150 }
  ];
  return(<>
  <div className="employee-chart">
    <h2 className="employee-heading">Employee Overview</h2>
    <p className="employee-des">Weekly attendance report</p>
       <ResponsiveContainer width="100%" height={300}>
        <BarChart data={attendanceData}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="employees"
            fill="#3b82f6"
            radius={[6, 6, 0, 0]}
          />

        </BarChart>
      </ResponsiveContainer>
  </div>
  </>)
}
export default EmployeeCharts;