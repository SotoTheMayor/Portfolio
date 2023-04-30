import React from "react";
import ProjectContainer from "../ProjectContainer";


export default function ProjectTwo() {
    return (
        <div className="section container">
            <div className="sectionHeader row">
                <h3>brokeR Exchange</h3>
            </div>
            <a href="https://github.com/SBarsuhn/Broker-Exchange"
            target="_blank" 
            className="sectionBody projectLink row justify-content-center">
                <img src={require('../../../Assets/brokerExchange.png')} 
                alt="exchange website with posts from users" />
            </a>
        </div>
    )
}