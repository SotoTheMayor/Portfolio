import React from "react";

export default function AboutMe() {
    return (
        <div className="wholePage container">
        <div className="row">
            <div className="imageBanner aboutImg col-4"></div>
            <div className="col-8">
                <div className="sectionHeader row">
                    <h2>About Me</h2>
                </div>
                <div className="sectionBody row justify-content-center">
                    <p className="col-8 text-center">This is the section where I do a write up about me, 
                    how I got here, and what I want to achieve.</p>
                </div>
            </div>
        </div>
        </div>
    )
}