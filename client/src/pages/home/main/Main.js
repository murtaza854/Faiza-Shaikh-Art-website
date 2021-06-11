import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Main.scss'

function Main(props) {
    const scrollToWork = _ => {
        var elmnt = document.getElementById("work-scroll");
        elmnt.scrollIntoView();
    }
    return (
        <Container fluid className="main" id="back-scroll">
            <Row className="header">
                <Col>
                    <h1>Faiza Shaikh</h1>
                    <div className="line"></div>
                    <p onClick={scrollToWork} style={{cursor: 'pointer'}} className="content-read">Go to Work</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Main;