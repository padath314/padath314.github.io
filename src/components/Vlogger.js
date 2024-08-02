import { Container, Row, Col } from "react-bootstrap";
import vlogger from "../assets/img/Vlogger.png"

export const Vlogger = () => {

    return (
        <section className="coding">
            <Container className="coding-container">
            <Row className="align-items-center">
            
            <Col>
            <div>
                <h1>Vlogging</h1>
                <p>My coding journey started in school</p>
            </div>
            <div className="youtube-embed">
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/3tu4PlGygYk"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            </div>
            </Col>

            <Col>
            <div className="profile">
                        <img src={vlogger} alt="Header Img"/>
            </div>
            </Col>
            </Row>
            </Container>
        </section>
    )
}