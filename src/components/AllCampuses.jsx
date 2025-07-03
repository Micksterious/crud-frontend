import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Campus.css';
import { Link } from 'react-router';

const AllCampuses = () => {
    const [campuses, setCampuses] = useState([]);

    useEffect(() => {
        const fetchAllCampuses = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/campuses');
                setCampuses(response.data);
            } catch (error) {
                console.error('Error fetching campuses:', error);
            }
        };

        fetchAllCampuses();
    }, []); 

    const handleDeleteCampus = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/campuses/${id}`);
            setCampuses(campuses.filter((campus) => campus.id !== id));
        } catch (error) {
            console.error('Error deleting campus:', error);
        }
    };

    return (
        <div className="campus-list">
            {campuses.map((campus) => (
                <div key={campus.id} className="campus-card">
                    <Link to={`/campuses/${campus.id}`}>
                        <h2>{campus.name}</h2>
                        {campus.imageUrl && <img src={campus.imageUrl} alt={campus.name} />}
                    </Link>
                    <div className="campus-card-buttons">
                        <button onClick={() => handleDeleteCampus(campus.id)}>Delete</button>
                    </div>
            </div>
        ))}
    </div>
);
};

export default AllCampuses;