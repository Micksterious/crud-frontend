import React from "react";
import axios from "axios"; //connect backend frontend
//component format
//const CampusCard = (props) => {}

const CampusCard = () => {
    const handleDeleteCampus = async()=>{
        try {
            await axios.delete("http://localhost:8080/api/${campus.id");
            fegchAllCampus()
        }catch(error){
            console.error("Error deleteing campus")
        }
    }

  return (
    <div className="campus-card">
      <h2 className="campus-card-header">Campus Name</h2> 
      <img src="https://hips.hearstapps.com/hmg-prod/images/berry-college-historic-campus-at-twilight-royalty-free-image-1652127954.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=1120:*"/>
      <p>description</p>
      <p>address</p>
      <p>contact</p>

      <p onClick={handleDeleteCampus}>🗑️Delete</p>
    </div> //div container, wrapper
  );
};

export default CampusCard;
