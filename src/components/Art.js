import { Container, Row, Col } from "react-bootstrap";
import artist from "../assets/img/Artist.png"

export const Art = () => {

    return (
        <section className="coding">
            <Container className="coding-container">
            <Row className="align-items-center">
                
            <Col>
            <div className="profile">
                        <img src={artist} alt="Header Img"/>
            </div>
            </Col>

            <Col>
            <div>
                <h1>Art</h1>
                <p>My coding journey started in school</p>
            </div>
            </Col>

            
            </Row>
            </Container>
        </section>
    )
}