import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx"
import Login from "./pages/login.jsx"
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Routes path="/carrer" element={<Carrer />}></Routes>
        <Routes path="/courses" element={<Courses />}></Routes>
        <Route path="/about" element={<About />}></Route>*/}
        <Route path="/login" element={<Login />}></Route> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
