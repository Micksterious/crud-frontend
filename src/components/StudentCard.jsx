import React from "react";
import axios from "axios";
import "./StudentCardStyles.css";

const StudentCard = ({ student, fetchAllStudents }) => {
  const handleEnrolledStudents = async () => {
    try {
      await axios.patch(`http://localhost:8080/api/${student.id}`, {
        completed: !student.enrolled,
      });
      fetchAllStudents();
    } catch (error) {
      console.error("Error enrolling student:", error);
    }
  };
    /*
  const handleDeleteTask = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/tasks/${task.id}`);
      fetchAllTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };
    */
  return (
    <div className={`student-card ${student.enrolled ? "enrolled" : "unenrolled"}`}>
      <div className="student-card-header">
        <h2>{student.title}</h2>
        <div className="student-card-header-buttons">
          {student.enrolled ? (
            <p onClick={handleEnrolledStudents}>🔄</p>
          ) : (
            <p onClick={handleEnrolledStudents}>✅</p>
          )}
          <p onClick={handleDeleteStudent}>🗑️</p>
        </div>
      </div>
      <p>{student.description}</p>
    </div>
  );
  
};

export default StudentCard;