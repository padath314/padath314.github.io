import { Container, Row, Col } from "react-bootstrap";
import baker from "../assets/img/Baker.png"

export const Baking = () => {

    return (
        <section className="coding">
            <Container className="coding-container">
            <Row className="align-items-center">
            
            <Col>
            <div>
                <h1>Coding</h1>
                <p>My coding journey started in school</p>
            </div>
            </Col>

            <Col>
            <div className="profile">
                        <img src={baker} alt="Header Img"/>
            </div>
            </Col>
            </Row>
            </Container>
        </section>
    )
}