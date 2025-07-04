import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Campus.css'; 

const Campus = () => {
  const [campuses, setCampuses] = useState([]);
  const [newCampus, setNewCampus] = useState({ name: '', imageUrl: '', address: '', description: '' });

  useEffect(() => {
    fetchAllCampuses();
  }, []);

  const fetchAllCampuses = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/campuses');
      setCampuses(response.data);
    } catch (error) {
      console.error('Error fetching campuses:', error);
    }
  };

  const handleAddCampus = async () => {
    try {
      await axios.post('http://localhost:8080/api/campuses', newCampus);
      setNewCampus({ name: '', imageUrl: '', address: '', description: '' });
      fetchAllCampuses();
    } catch (error) {
      console.error('Error adding campus:', error);
    }
  };

  const handleDeleteCampus = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/campuses/${id}`);
      fetchAllCampuses();
    } catch (error) {
      console.error('Error deleting campus:', error);
    }
  };

  return (
    <div>
      <h1 className="campus-title">Add Campus</h1>
      <div className="add-campus-form">
        <input
          type="text"
          placeholder="Campus Name"
          value={newCampus.name}
          onChange={(e) => setNewCampus({ ...newCampus, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newCampus.imageUrl}
          onChange={(e) => setNewCampus({ ...newCampus, imageUrl: e.target.value })}
        />
        <input
          type="text"
          placeholder="Address"
          value={newCampus.address}
          onChange={(e) => setNewCampus({ ...newCampus, address: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newCampus.description}
          onChange={(e) => setNewCampus({ ...newCampus, description: e.target.value })}
        />
        <button onClick={handleAddCampus}>Add Campus</button>
      </div>
      <div className="campus-list">
        {campuses.map((campus) => (
          <div key={campus.id} className="campus-card">
            <h2>{campus.name}</h2>
            {campus.imageUrl && <img src={campus.imageUrl} alt={campus.name} />}
            <div className="campus-card-buttons">
                <button onClick={() => handleEditCampus(campus.id)}>Edit</button>
                <button onClick={() => handleDeleteCampus(campus.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Campus;