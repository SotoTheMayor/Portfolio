import React from "react";
import ProjectContainer from "../ProjectContainer";


export default function ProjectOne() {
    return (
        <div className="section container">
            <div className="sectionHeader row">
                <h3>Project Name 1 Here</h3>
            </div>
            <div className="sectionBody row justify-content-center">
                <img src={require('../../../Assets/Project-Main.png')} alt="Main Project Image" />
            </div>
        </div>
    )
}