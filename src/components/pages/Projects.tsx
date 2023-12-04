import React from "react";
import ProjectContainer from "./ProjectContainer";

//header for projects - rest of project tab displays through ProjectContainer
export default function Portfolio({ currentProject, handleProjectChange }: any) {
    return (
            <div className="sectionHeader row">
                <h2>Projects</h2>
                <p className="col-8" id="projectIntro">Please navigate through some of my top projects using the arrows
                    on either side.  You can click the image of the project to be taken
                    to either it's deployed site, or the GitHub repo. There is a brief 
                    description of each below, as well. </p>
            </div>
            )
}