import React, {useState, useEffect, use} from "react";
import axios from "axios";
import{useParams} from "react-router";
//import "./Student.css";

const SingleStudent = () => {
    const {id} = useParams();
    const [student,setStudent] = useState("");
    
    useEffect(()=>{
        const fetchStudent = async () => {
            try{
                const response = await axios.get(`http://localhost:8080/api/students/${id}`) // this format $ {id}
                setStudent(response.data);
            } catch (error) {
                console.error("Error fetching student:", error);
            }
        }
        fetchStudent();
    },[id]);

    return (
        <div className="single-student">
            <div className="student-card">
                <h2>{student.firstName} {student.lastName}</h2>
                {student.imageUrl && <img src={student.imageUrl} alt={`${student.firstName} ${student.lastName}`}/>}
                <p><strong>GPA:</strong> {student.gpa}</p>
                <p><strong>Email:</strong> {student.email}</p>
                <h3>Campus Registered:</h3>
                <p>This student may have registered to a campus, but they are not shown here.</p> {/* ✅ Static message */}
            </div>
        </div>
    );

};

export default SingleStudent;