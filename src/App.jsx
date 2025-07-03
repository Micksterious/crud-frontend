import React, {useState, useEffect} from "react";
import { createRoot } from "react-dom/client";
import "./AppStyles.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router";
import Student from "./components/Student";
import Campus from "./components/Campus";
import StudentList from "./components/StudentList";
import CampusList from "./components/CampusList";
import Home from "./components/Home";

//campus object, lowercase, {curly}
const campus = [
{
  id:1,
  name: "BMCC CUNY",
  descrption: "description",
  address: "address",
  image:"https://hips.hearstapps.com/hmg-prod/images/berry-college-historic-campus-at-twilight-royalty-free-image-1652127954.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=1120:*",
},
{
  id:2,
  name: "BMCC CUNY",
  descrption: "description",
  address: "address",
  image:"https://hips.hearstapps.com/hmg-prod/images/berry-college-historic-campus-at-twilight-royalty-free-image-1652127954.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=1120:*",
},
{
  id:3,
  name: "BMCC CUNY",
  descrption: "description",
  address: "address",
  image:"https://hips.hearstapps.com/hmg-prod/images/berry-college-historic-campus-at-twilight-royalty-free-image-1652127954.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=1120:*",
},
]






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
    //component can only use one parent element, one div 
    <div>
      <NavBar/> 
      {/* <nav>
        <Link to="/student"> Student </Link>
        <Link to="/campuses"> Campuses </Link>
      </nav> */}

      {/* create the path and connect component */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/all-students" element={<StudentList />} />
        {/* <Route path="/student" element={<Student />} /> */}
        {/* <Route path="/all-campus/:campusId" element={<Campus/>}/> */}
        <Route path="/all-campus" element={<CampusList campus = {campus}/>}/>
        {/* <Route path="/add-campus/" element={<addCampus/>}/> */}
        {/* pass props, new variable in the CampusList conponent */}
      </Routes>

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