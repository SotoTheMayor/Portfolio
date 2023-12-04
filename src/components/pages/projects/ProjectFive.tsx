import React from "react";
import ProjectContainer from "../ProjectContainer";


export default function ProjectFive() {
    return (
        <div className="section container-fluid">
            <div className="sectionHeader row">
                <h3>J.A.T.E.</h3>
            </div>
            <a href="https://github.com/SotoTheMayor/PWATextEditor" 
            target="_blank" 
            className="sectionBody projectLink row justify-content-center">
                <img src={require('../../../Assets/JATE.png')} 
                alt="J.A.T.E. Project Image" />
            </a>
        </div>
    )
}