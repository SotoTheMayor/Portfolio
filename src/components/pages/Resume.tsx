import React from "react";

export default function Resume() {
    return (
        <div className="wholePage container-fluid row">
            <div className="imageBanner resumeImg col-4"></div>
            <div className="col-8">
                <div className="sectionHeader row">
                    <h2>Resume</h2>
                </div>
                {/* need to build backend link for allowing resume download in the anchor tag below */}
                <div className="sectionBody row justify-content-center">
                    <p className="resumeBody text-center">If you'd like to download a copy
                    of my resume, you can do so here <a href='https://docs.google.com/document/d/10kqPgprWIFwfsjOeCo2kzqKw7_Qo_GPtO-V0OH-9EpE/edit?usp=sharing' target="_blank">Jason Johnson Resume</a></p>
                    <p className="resumeBody text-center">I enjoy writing code for both front-end 
                    and back-end, and have picked up many skills so far: </p>
                    <div className="row resumeBody justify-content-center text-center">
                    <ul className="col-4 resumeBody">
                        <li><span className="ms-4">JavaScript</span></li>
                        <li><span className="ms-4">TypeScript</span></li>
                        <li><span className="ms-4">JQuery</span></li>
                        <li><span className="ms-4">Node</span></li>
                        <li><span className="ms-4">React</span></li>
                        <li><span className="ms-4">Handlebars</span></li>
                    </ul>
                    <ul className="col-4 resumeBody">
                        <li><span className="ms-4">Jira</span></li>
                        <li><span className="ms-4">Postman/Insomnia</span></li>
                        <li><span className="ms-4">LogRocket</span></li>
                        <li><span className="ms-4">MySQL</span></li>
                        <li><span className="ms-4">MongoDB</span></li>
                        <li><span className="ms-4">Progressive Web Apps</span></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}