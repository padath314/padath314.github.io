import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import instagram from '../assets/img/instagram.png';
import github from '../assets/img/github.png';
import linkedin from '../assets/img/linkedin.png';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState('false');

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
              } else {
                setScrolled(false);
              }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
      }


    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container className="all-navbar-elements" >
            <Navbar.Brand href="/"> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggle-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse   id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" className={ activeLink ==='home"'? 'active-navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={ activeLink ==='skills'? 'active-navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Link</Nav.Link>
                        <Nav.Link href="#projects" className={ activeLink ==='projects'? 'active-navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('projects')}>About</Nav.Link>
                        
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.instagram.com/susanpadath/"><img src={instagram} alt=""/></a>
                            <a href="https://github.com/padath314"><img src={github} alt=""/></a>
                            <a href="https://in.linkedin.com/in/susan-varghese-padath"><img src={linkedin} alt=""/></a>
                        </div>
                        <button className="vvd" onClick={()=> console.log('connect')}>
                            <span>Let's connect</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )   
}