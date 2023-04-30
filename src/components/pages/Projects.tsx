import React from "react";
import ProjectContainer from "./ProjectContainer";

export default function Portfolio({ currentProject, handleProjectChange }: any) {
    return (
            <div className="sectionHeader row">
                <h2>Projects</h2>
                <p id="projectIntro">Please navigate through some of my top projects using the arrows
                    on either side.  You can click the image of the project to be taken
                    to it's deployed site, and there is a brief description of each below. </p>
            </div>
            )
}