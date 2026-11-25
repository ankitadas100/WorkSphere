
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Sidebar from "./Component/Sidebar";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="app-container">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-content">

        {/* Navbar */}
        <Navbar />

        {/* Pages */}
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </main>

      </div>
    </div>
  );
}

export default App;
