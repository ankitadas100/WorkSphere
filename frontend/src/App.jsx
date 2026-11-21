import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Sidebar from "./Component/Sidebar";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Sidebar/>

      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={<h1>WorkSphere Dashboard</h1>}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;