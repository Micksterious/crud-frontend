import React from "react";
import StudentCard from "StudentCard";

const StudentList = ({ students, fetchAllStudents, navBarSetting }) => {
  const filteredStudents = students.filter((student) => {
    if (navBarSetting === "All Students") return true;
    if (navBarSetting === "Enrolled Students") return student.enrolled;
    if (navBarSetting === "Unenrolled Students") return !student.enrolled;
  });
  
  
  return (
    <div>
      {students.length > 0 ? (
        students.map((student) => (
          <StudentCard key={student.id} student={student} fetchAllStudents={fetchAllStudents} />
        ))
      ) : (
        <p>No students found</p>
      )}
    </div>
  );
};

export default StudentList;