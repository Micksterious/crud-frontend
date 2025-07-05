import React, { useEffect, useState } from "react";
import axios from "axios"; //better version of fetch, to grabe data from db
import './Student.css';
import { Link } from "react-router";

//className makes div unique to call, later css can use .student-list
const AllStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchAllStudents = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/students");
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };
    fetchAllStudents()
  }, []);

  const handleDeleteStudents = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/students/${id}`);
      setStudents(students.filter((student) => student.id !== id));
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  }; //why setStudents here?

  return (

    <div className="student-list">
      {students.map((student) => (
        <div key={student.id} className="student-card">
          <Link to={`/students/${student.id}`}>
          <h2>{student.firstName} {student.lastName}</h2>
            <h2>{student.name}</h2>
            {student.imageUrl && <img src={student.imageUrl} alt={`${student.firstName} ${student.lastName}`}/>}
          </Link>
          <p>{student.email}</p>
          <div className="student-card-buttons">
            <button onClick={() => handleDeleteStudents(student.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>

    );
};

export default AllStudents;

