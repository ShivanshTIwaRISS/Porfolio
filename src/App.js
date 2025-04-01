import React from 'react';
import './App.css';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="content">
        {/* About Section */}
        <section className="about">
          <h2>About Me</h2>
          <p>
            Aspiring full stack developer with hands-on experience in building web applications. I have solved 100+ questions on LeetCode, achieving a rating of 1400+. Additionally, I have a Codeforces rating of 900+. I’m passionate about learning new technologies and building scalable and efficient applications.
          </p>
        </section>

        {/* Skills Section */}
        <section className="skills">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Python</li>
            <li>MySQL</li>
            <li>SQL</li>
            <li>Excel</li>
            <li>Microsoft Office</li>
          </ul>
        </section>

        {/* Education Section */}
        <section className="education">
          <h2>Education</h2>
          <div className="college-info">
            <h3>Newton School of Technology, Rishihood University</h3>
            <p>Bachelor of Technology in Data Science (2024 - 2028)</p>
            <p>Grade: Pursuing</p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="projects">
          <h2>My Projects</h2>
          <div className="projects-container">
          <ProjectCard 
              title="TaskMate"
              description="A task manager app with CRUD operations."
              image="/images/Screenshot 2025-04-02 at 12.02.37 AM.png"
              demoLink="https://making-one.vercel.app/"
              githubLink="https://github.com/ShivanshTIwaRISS/Making-one"
            />
          <ProjectCard 
              title="The Quiz Game"
              description="A fun and interactive quiz game built with HTML, CSS, and JavaScript."
              image="/images/Screenshot 2025-04-02 at 12.03.54 AM.png"
              demoLink="https://shivanshtiwariss.github.io/MY-QUIZ/"
              githubLink="https://github.com/ShivanshTIwaRISS/MY-QUIZ"
            />

          
          </div>
        </section>

        <section className="contact">
          <h2>Contact Information</h2>
          <p>Email: shivansh.tiwari2024@nst.rishihood.edu.in</p>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/shivansh-tiwari-b83aa8324" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/ShivanshTIwaRISS" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://leetcode.com/u/TourCoder0905/" target="_blank" rel="noopener noreferrer">LeetCode</a>
            <a href="https://codeforces.com/profile/shivansh.tiwari0909" target="_blank" rel="noopener noreferrer">Codeforces</a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
