import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./AppStyles.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router";
import Student from "./components/Student";
import Campus from "./components/Campus";
import StudentList from "./components/StudentList";
import CampusList from "./components/CampusList";
import Home from "./components/Home";


const App = () => {

  // new stuff play area ends
  return (
    //component can only use one parent element, one div 
    <div>
      <NavBar />
      {/* create the path and connect component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-students" element={<StudentList />} />
        <Route path="/student" element={<Student />} />
        <Route path="/campus" element={<Campus />} />
      </Routes>
    </div>
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