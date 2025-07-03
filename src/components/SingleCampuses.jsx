import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Campus.css';
import { useParams } from 'react-router'; 

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
        <p>This campus may have students enrolled, but they are not shown here.</p> {/* ✅ Static message */}
      </div>
    </div>
  );
};

export default SingleCampus;
