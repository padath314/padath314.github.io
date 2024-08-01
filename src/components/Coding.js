import { Container, Row, Col } from "react-bootstrap";
import {BrowerRouter, Routes, Route, Link} from "react-router-dom";
import coder from "../assets/img/Coder.png"


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
                <p>My coding journey started in school</p>
            </div>
            </Col>
            </Row>
            
            
            </Container>
        </section>
    )
}