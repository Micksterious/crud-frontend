import React from "react";
import CampusCard from "./CampusCard";//import component

//self close tag /
//campus component render campuscard
//main tag element
//props

//replace campus prop with the new state of our Campuses
//app.jsx make axios call to backend,request all campuses, get response - 
// then use data to update the state of your campuses
//then pass as a prop to CampusList,
//then from campuslist, pass same prop to campusCard

const CampusList = ({campus})=>{
    return (
        <main className="campus-list-container">
            {/* format for map
            {campus.map(() => (            ))};
            always give it a key... for map , element
            */}
            {campus.map((camp) => (
                <CampusCard
                    key={camp.id}  
                />
            ))}
        </main>
    )
}

export default CampusList;