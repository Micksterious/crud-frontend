import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Student.css';

const AddStudents = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [gpa, setGpa] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/students', {
                firstName,
                lastName,
                email,
                imageUrl,
                gpa
            });
            console.log('Student added:', response.data);
        } catch (error) {
            console.error('Error adding student:', error);
        }
    };

    return (
        <div className="add-student">
            <h2>Add New Student</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Image URL:</label>
                    <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                </div>
                <div>
                    <label>GPA:</label>
                    <input type="number" step="0.01" value={gpa} onChange={(e) => setGpa(e.target.value)} />
                </div>
                <button type="submit">Add Student</button>
            </form>
        </div>
    );
};

export default AddStudents;