import { Container, Row, Col } from "react-bootstrap";
import {Link} from "react-router-dom";
import coder from "../assets/img/Coder.png"
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const Coding = () => {
       return (
        <section className="coding">
            <Container className="coding-container">
            <Row className="align-items-center">
            <Col>
            <div className="profile">
                        <img src={coder} alt="Header Img"/>
            </div>
            </Col>

            <Col>
            <div>
                <h1>Coding</h1>
                <p>Your coding journey began in school, sparked by a simple curiosity that quickly grew into a passion. You explored various programming languages, tackled coding assignments, and participated in competitions. This early dedication led you to the Indian Institute of Technology, Palakkad, where you majored in computer science. At IIT, you refined your skills, delved into advanced concepts, and worked on innovative projects, building a strong foundation for your future in tech.</p>
            </div>
            <div>
            <button onClick={() => console.log('projects')} className="projects-button">
                <li>
                <Link to="/projects" className="projects-link">Projects</Link>
                </li>
                <ArrowRightCircle color="white" size={25} />
            </button>
            </div>
            </Col>
            </Row>         
            
            </Container>
        </section>
    )
}