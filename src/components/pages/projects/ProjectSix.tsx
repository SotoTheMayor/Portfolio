import React from "react";
import ProjectContainer from "../ProjectContainer";


export default function ProjectSix() {
    return (
        <div className="section container">
            <div className="sectionHeader row">
                <h3>Weather Dashboard</h3>
            </div>
            <a href="https://sotothemayor.github.io/weatherDashboard/" 
            target="_blank" 
            className="sectionBody projectLink row justify-content-center">
                <img src={require('../../../Assets/weatherDashboard.png')} 
                alt="Five day city forecast" />
            </a>
        </div>
    )
}