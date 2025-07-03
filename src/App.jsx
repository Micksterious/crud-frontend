import React from "react";
import { createRoot } from "react-dom/client";
import "./AppStyles.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router";
import Student from "./components/Student";
import Campus from "./components/Campus";

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/student"> Student </Link>
        <Link to="/campuses"> Campuses </Link>
      </nav>

      <Routes>
        <Route path="/student" element={<Student />} />
        <Route path="/Campuses" element={<Campus />} />
      </Routes>
      <div className="app">
        <h1>Hello React!</h1>
        <img className="react-logo" src="/react-logo.svg" alt="React Logo" />

      </div>
    </div>
    // <div>
    //   <NavBar />
    //
    // </div>
  );
};

// We're using React Router to handle the navigation between pages.
// It's important that the Router is at the top level of our app,
// and that we wrap our entire app in it. With this in place, we can
// declare Routes, Links, and use useful hooks like useNavigate.
const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);