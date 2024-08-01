import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';

import baker from "../assets/img/Baker.png"
import me from "../assets/img/Me.png"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Developer", "Home Baker"]
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random*100)
;    const period = 2000;

    useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1);
        
        setText(updatedText);
        if( isDeleting ){
            setDelta(prevDelta => prevDelta/2)
        }

        if( !isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }
        else if(isDeleting && updatedText === '')
        {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7} >
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`Hi! I'm Susan, \n\n`} <span className="wrap">{text}</span></h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <button onClick={() => console.log('connect')}> Let's Connect <ArrowRightCircle size={25}></ArrowRightCircle></button>         
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <div className="profile">
                        <img src={me} alt="Header Img"/>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}