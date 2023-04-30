import React from "react";
import ProjectContainer from "../ProjectContainer";


export default function ProjectFour() {
    return (
        <div className="section container">
            <div className="sectionHeader row">
                <h3>Social Network API</h3>
            </div>
            <a href="https://github.com/SotoTheMayor/socialNetworkAPINoSQL" 
            target="_blank" 
            className="sectionBody projectLink row justify-content-center">
                <img src={require('../../../Assets/SocialNetworkAPI.png')} 
                alt="Insomnia Image of Routes" />
            </a>
        </div>
    )
}