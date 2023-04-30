import React from "react";
import ProjectContainer from "../ProjectContainer";


export default function ProjectOne() {
    return (
        <div className="section container">
            <div className="sectionHeader row">
                <h3>The Purrfect Book</h3>
            </div>
            <a href="https://sotothemayor.github.io/recommendabook/" 
            target="_blank" 
            className="sectionBody projectLink row justify-content-center">
                <img src={require('../../../Assets/purrfectBook.png')} 
                alt="cats recommending books" />
            </a>
        </div>
    )
}