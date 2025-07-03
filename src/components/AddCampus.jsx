import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Campus.css';

const AddCampus = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/campuses', {
                name,
                address,
                description,
                imageUrl
            });
            console.log('Campus added:', response.data);
        } catch (error) {
            console.error('Error adding campus:', error);
        }
    };

    return (
        <div className="add-campus">
            <h2>Add New Campus</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label>Address:</label>
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
                </div>
                <div>
                    <label>Image URL:</label>
                    <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
                </div>
                <button type="submit">Add Campus</button>
            </form>
        </div>
    );
};

export default AddCampus;
