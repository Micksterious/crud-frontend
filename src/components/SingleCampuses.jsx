import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Campus.css';
import { useParams } from 'react-router';

const SingleCampuses = () => {
    const { id } = useParams();
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

    return (
        <div className="single-campus">
            {campus ? (
                <div className="campus-card">
                    <h2>{campus.name}</h2>
                    {campus.imageUrl && <img src={campus.imageUrl} alt={campus.name} />}
                    <p>{campus.description}</p>
                    <p>Address: {campus.address}</p>
                    <p>Phone: {campus.phone}</p>
                </div>
            ) : (
                <p>Loading campus details...</p>
            )}
        </div>
    );
};

export default SingleCampuses;