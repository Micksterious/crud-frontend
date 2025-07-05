import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./AppStyles.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router";
import Home from "./components/TEMPHome";
import AllCampuses from "./components/AllCampuses";
import AllStudent from "./components/AllStudents";
import AddStudents from "./components/AddStudents";
import AddCampus from "./components/AddCampus";
import SingleCampuses from "./components/SingleCampuses";
import SingleStudent from "./components/SingleStudent";

const App = () => {

  // new stuff play area ends
  return (
    //component can only use one parent element, one div 
    <div>
      {/* NavBar component */}
      <NavBar />

      {/* create the path and connect component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<AllStudent />} />
        <Route path="/campuses" element={<AllCampuses />} />
        <Route path="/add-campus" element={<AddCampus />} />
        <Route path="/add-student" element={<AddStudents />} />
        <Route path="/campuses/:id" element={<SingleCampuses />} />
        <Route path="/students/:id" element={<SingleStudent />} />
        {/* Add more routes as needed */}
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