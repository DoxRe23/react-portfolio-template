import React from "react";
import mock01 from '../assets/images/Brosur3D.png';
import mock02 from '../assets/images/TLJCargo.png';
import mock03 from '../assets/images/MySF.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/DoxRe23/model-analisis-sentimen-mysf" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/DoxRe23/model-analisis-sentimen-mysf" target="_blank" rel="noreferrer"><h2>Sentiment Analysis Model for MySF's Review</h2></a>
                <p>An analysis model developed using Python and BERT method to compile the user’s review data of MySF application from Google Playstore and turn them into information containing user sentiments, classified into positive, neutral, and negative categories. </p>
            </div>
            <div className="project">
                <a href="https://github.com/DoxRe23/tlj-cargo-management-system" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/DoxRe23/tlj-cargo-management-system" target="_blank" rel="noreferrer"><h2>TLJ Cargo Management System</h2></a>
                <p>A web-based goods delivery management system made with PHP, MySQL and BootStrap designed to streamline the shipping management process for TLJ Cargo.</p>
            </div>
            <div className="project">
                <a href="https://github.com/DoxRe23/brosur-3d" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/DoxRe23/brosur-3d" target="_blank" rel="noreferrer"><h2>3D Brochures for Kitchen Product</h2></a>
                <p>An android application made with Android Studio, Vuforia and Unity, developed to assist in the marketing of kitchenware products. It provides information on the marketed kitchenware products utilizing Alternate  Reality and 3D technology, along with their specifications and prices.</p>
            </div>

        </div>
    </div>
    );
}

export default Project;