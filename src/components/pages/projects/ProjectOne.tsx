import React from "react";
import ProjectContainer from "../ProjectContainer";


export default function ProjectOne() {
    return (
        <div className="section container">
            <div className="sectionHeader row">
                <h3>Bonatics</h3>
            </div>
            <a href="https://github.com/SotoTheMayor/bonatics" 
            target="_blank" 
            className="sectionBody projectLink row justify-content-center">
                <img src={require('../../../Assets/Bonatics.png')} 
                alt="plant trading for plant lovers" />
            </a>
        </div>
    )
}