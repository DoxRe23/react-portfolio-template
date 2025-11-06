import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MyPhoto from '../assets/images/MyPhoto.jpg';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={MyPhoto} />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/DoxRe23" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/oky-redian-prima-7759a1388/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Oky Redian Prima</h1>
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/DoxRe23" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/oky-redian-prima-7759a1388/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;