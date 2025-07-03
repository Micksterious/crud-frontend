import React, { useEffect, useState } from "react"; 
import axios from "axios"; //better version of fetch, to grabe data from db
import './Campus.css';
import { Link } from "react-router";

//className makes div unique to call, later css can use .student-list
const AllStudent =() =>{
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
          <h2>{student.firstName} {student.lastName}</h2>
          <p>{student.email}</p>
          <div className="student-card-buttons">
            <button onClick={() => handleDeleteStudents(student.id)}>Delete</button>
            {/* You can link to a single student page here */}
            {/* <Link to={`/students/${student.id}`}>View</Link> */}
          </div>
        </div>
      ))}
    </div>

    );
};

export default AllStudent;
    
