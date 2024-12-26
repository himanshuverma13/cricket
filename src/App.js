import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Pages/Home/index";
import Schedule from "./Component/Pages/Schedule/index";
import Series from "./Component/Pages/Series/index";
import Team from "./Component/Pages/Team/index";
import News from "./Component/Pages/News/index";
import Navbar from "./Component/Common/Navbar/index";
import { GetMatchCardAPI } from "./Component/APIs/api";
import { useEffect } from "react";

function App() {
  return (
    <>
     <Router>
      <Navbar />  {/* Navbar can go here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/series" element={<Series />} />
        <Route path="/team" element={<Team />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
