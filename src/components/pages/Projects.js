import { NavBar } from "../NavBar";
import './ProjectBox.css';

function Projects() {
    return (
      <div className="App">
      <NavBar/>
      <section className="project-page">
      <h1>Projects</h1>
      
      <div className="project-box">
      <div className="project-content">
        <h2>Project 1</h2>
        <p>xyz</p>
        <span>Aug12-12nsdfkj</span>
      </div>
      <div className="overlay">
        <a href="https://github.com/judygab/" target="_blank" rel="noopener noreferrer" className="github-link">
          
        </a>
      </div>
    </div>
    </section>  
    </div>
    )
}

export default Projects;