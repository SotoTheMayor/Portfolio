import React from "react";

export default function Portfolio({ currentProject, handleProjectChange }: any) {
    return (
        <div className="section container">
            <div className="sectionHeader row">
                <h2>Portfolio</h2>
            </div>
            <div className="sectionBody row justify-content-center">
                
                <a
                href="#Next" 
                onClick={() => handleProjectChange('Next')}>
                    <div className="col-2 glyphicon align-self-center text-center">&#10094;</div>
                </a>
                
                <img className="col-4 img-fluid portfolio-image" src={require('../../Assets/Project-Main.png')} alt="Main Project Image" />
                                
                <a
                href="#Prev" 
                onClick={() => handleProjectChange('Prev')}>
                    <div className="col-2 glyphicon align-self-center text-center">&#10095;</div>
                </a>

                <p className="row portfolio-text">This is the section where I do a write up about me, 
                how I got here, and what I want to achieve. When the text wraps it will wrap like this too.</p>
            </div>
        </div>
    )
}