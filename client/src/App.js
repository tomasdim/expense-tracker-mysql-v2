import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Operation from "./components/Operation";
import CompShowOperations from "./components/ShowOperations";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/operations" element={<CompShowOperations/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
