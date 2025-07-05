import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Campus.css';
import { useParams } from 'react-router';
import { Link } from 'react-router'; // use Link from react-router-dom for navigation

const SingleCampus = () => {
  const { id } = useParams(); // get campus ID from URL
  const [campus, setCampus] = useState(null);

  useEffect(() => {
    const fetchCampus = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/campuses/${id}`);
        setCampus(response.data);
      } catch (error) {
        console.error('Error fetching campus:', error);
      }
    };

    fetchCampus();
  }, [id]);

  if (!campus) {
    return <p>Loading campus info...</p>;
  }

  return (
    <div className="single-campus">
      <div className="campus-card">
        <h2>{campus.name}</h2>
        {campus.imageUrl && <img src={campus.imageUrl} alt={campus.name} />}
        <p><strong>Address:</strong> {campus.address}</p>
        <p><strong>Description:</strong> {campus.description}</p>
        <h3>Students Enrolled:</h3>
        {campus.students && campus.students.length > 0 ? (
          <ul>
            {campus.students.map(student => (
              <li key={student.id}>
                <Link to={`/students/${student.id}`}>
                  {student.firstName} {student.lastName}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No students enrolled in this campus.</p>
        )}

      </div>
    </div>
  );
};

export default SingleCampus;