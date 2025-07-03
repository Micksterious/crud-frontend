import React, { useEffect, useState } from "react"
import axios from "axios"//better version of fetch, to grabe data from db

//className makes div unique to call, later css can use .student-list
const AllStudent =() =>{
    const [students,setStudents] = useState([]);

    useEffect(() => {
        const fetchAllStudents = async()=> {
            try{
                const response = await axios.get("http://localhost:8080/api/students");
                setCampuses(response.data);
            }catch(error){
                console.error("Error fetching campus:", error);
            }
        };
        fetchAllStudents()
    }, []);

    const handleDeleteStudents =async (id)=>{
        try{
            axios.delete("http://localhost:8080/api/students");
            setStudents(students.filter((student) =>student.id !== id));
        } catch (error){
            console.error("Error deleting student:",error);
        }
    }//why setStudents here?

    return (
    
        <div className="student-list">
            {students.map((student)=> (
                <div key={student.id} className="student-card">
                    <h2>{student.name}</h2> 
                    <div className="student-card-buttons">
                        <button onClick={()=>handleDeleteStudents(student.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AllStudent;
    
