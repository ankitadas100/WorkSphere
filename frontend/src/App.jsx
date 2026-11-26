
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Sidebar from "./Component/Sidebar";
import Dashboard from "./pages/Dashboard";
import EmployeeCharts from "./pages/EmployeeCharts";
import "./App.css";

function App() {
  return (
    <div className="app-container">

    
      <Sidebar />

      <div className="main-content">

        
        <Navbar />

        
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="EmployeeCharts" element={< EmployeeCharts />}/>
          </Routes>
        </main>

      </div>
    </div>
  );
}

export default App;
