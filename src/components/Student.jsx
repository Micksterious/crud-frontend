import React, { useState, useEffect } from "react";
import axios from "axios";

//this is the page with aform to add a new student
const Student = () => {
  const [students, setStudents] = useState([]);
  const [newStudents, setNewStudent] = useState({
    name: "",
    imageUrl: "",
    major: "",
    campus: "",
  });

  useEffect(() => {
    fetchAllStudents();
  }, []);

  const fetchAllStudents = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/students");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleAddStudent = async () => {
    try {
      await axios.post("http://localhost:8080/api/students", NewStudent);
      setNewStudent({ name: "", imageUrl: "", major: "", campus: "" });
      fetchAllStudents();
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  const handleDeleteStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/students/${id}`);
      fetchAllStudents();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <div>
      <h1 className="student-title">Add Student</h1>
      <div className="add-student-form">
        <input
          type="text"
          placeholder="Student Name"
          value={newStudent.name}
          onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newStudent.imageUrl}
          onChange={(e) =>
            setNewStudent({ ...newStudent, imageUrl: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Address"
          value={newStudent.address}
          onChange={(e) =>
            setNewStudent({ ...newStudent, address: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Description"
          value={newStudent.description}
          onChange={(e) =>
            setNewStudent({ ...newStudent, description: e.target.value })
          }
        />
        <button onClick={handleAddStudent}>Add Student</button>
      </div>
      <div className="student-list">
        {students.map((student) => (
          <div key={student.id} className="student-card">
            <h2>{student.name}</h2>
            {student.imageUrl && <img src={student.imageUrl} alt={student.name} />}
            <div className="student-card-buttons">
              <button onClick={() => handleEditStudent(student.id)}>Edit</button>
              <button onClick={() => handleDeleteStudent(student.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Student;