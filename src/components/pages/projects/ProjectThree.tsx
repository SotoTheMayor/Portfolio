import React from "react";
import ProjectContainer from "../ProjectContainer";


export default function ProjectThree() {
    return (
        <div className="section container-fluid">
            <div className="sectionHeader row">
                <h3>Tech Blog</h3>
            </div>
            <a href="https://github.com/SotoTheMayor/mvcTechBlog" 
            target="_blank" 
            className="sectionBody projectLink row justify-content-center">
                <img src={require('../../../Assets/techBlog.png')} 
                alt="J.A.T.E. Project Image" />
            </a>
        </div>
    )
}