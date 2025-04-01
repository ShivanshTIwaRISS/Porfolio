import React from 'react';

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>TaskMate</h3>
        <p>Frontend: React.js, CSS</p>
        <p>State Management: React’s useState</p>
        <p>Features: Search functionality, CRUD operations, persistence with local storage (optional)</p>
        <p>Deployment: <a href="https://github.com/ShivanshTIwaRISS" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://your-demo-link.com" target="_blank" rel="noopener noreferrer">Demo</a></p>
      </div>
      <div className="project">
        <h3>The Quiz Game</h3>
        <p>Tech Stack: HTML, CSS, JavaScript</p>
        <p>Features: Start quiz, answer questions, progress bar, interactive buttons, error messages.</p>
        <p>Deployment: <a href="https://github.com/ShivanshTIwaRISS" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://your-demo-link.com" target="_blank" rel="noopener noreferrer">Demo</a></p>
      </div>
    </section>
  );
};

export default Projects;
