import React, {useState, useEffect} from "react";
import { createRoot } from "react-dom/client";
import "./AppStyles.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router";
import Student from "./components/Student";
import Campus from "./components/Campus";
import StudentList from "./components/StudentList";
//import CampusList from "./components/CampusList";


const App = () => {
  // new stuff play area begins
  // const [navBarSetting, setNavBarSetting] = useState("All Tasks");

  // const [students, setStudents] = useState([]);

  // async function fetchAllStudents() {
  //   try {
  //     const response = await axios.get("http://localhost:8080/api/students");
  //     setStudents(response.data);
  //   } catch (error) {
  //     console.error("Error fetching Students:", error);
  //   }
  // }

  // useEffect(() => {
  //   fetchAllStudents();
  // }, []);

  // new stuff play area ends
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

{/*       
      // test area 2 begins
      <div>
        <NavBar
          navBarSetting={navBarSetting}
          setNavBarSetting={setNavBarSetting}
        />
        {navBarSetting === "Add Student" && (
          <AddTask
            fetchAllStudents={fetchAllStudents}
            setNavBarSetting={setNavBarSetting}
          />
        )}
        {navBarSetting !== "Add Student" && (
          <div className="app">
            <StudentList
              students={students}
              fetchAllStudents={fetchAllStudents}
              navBarSetting={navBarSetting}
            />
          </div>
        )} */}

      {/* test area 2 ends */}
        <Routes>
          <Route path="/Student" element={<Student />} />
          <Route path="/Campus" element={<Campus />} />
        </Routes>
    </div>
    /* // <div>
    //   <NavBar />
    //
    // </div> */
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