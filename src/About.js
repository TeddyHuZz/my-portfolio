import React from 'react';
import './About.css';
import profilePicture from './assets/profile.jpg';
import twitterLogo from './assets/twitter.png'; // Replace with your logo paths
import linkedinLogo from './assets/linkedin.png';
import githubLogo from './assets/github.png';

function About() {
  return (
    <div className="container">
      <div className="header">
        <nav className="navmenu">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
        </nav>
      </div>
      <div className="content">
        <img src={profilePicture} alt="Me" className="profile-picture" />
        <h1>
          Hey, I am Wen Fei! Software Developer and Web3{' '}
          <span className="typing-effect">Enthusiast</span>
        </h1>
      </div>
      <div className="social-media">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={twitterLogo} alt="Twitter" className="social-logo" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn" className="social-logo" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" className="social-logo" />
        </a>
      </div>
    </div>
  );
}

export default About;