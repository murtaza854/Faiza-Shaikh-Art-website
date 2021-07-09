import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Work.scss';
import { useHistory } from "react-router-dom";

function Work(props) {
    let history = useHistory();
    function handleClick() {
      history.push("/home");
    }
    return (
        <Container className="work" id="work-scroll" fluid>
            <Row>
                <Col onClick={_ =>  history.push("/mini-sketches")} md={2}>
                    <h3 className="bottom">Mini Sketches</h3>
                </Col>
                <Col onClick={_ =>  history.push("/scripture-series")} md={2}>
                    <h3 className="middle">Scripture series</h3>
                </Col>
                <Col onClick={_ =>  history.push("/doll-series")} md={2}>
                    <h3 className="bottom">Doll series</h3>
                </Col>
                <Col onClick={_ =>  history.push("/reflection-series")} md={2}>
                    <h3 className="middle">Reflection series</h3>
                </Col>
                <Col onClick={_ =>  history.push("/monk-series")} md={2}>
                    <h3 className="bottom">Monk series</h3>
                </Col>
                <Col onClick={_ =>  history.push("/popart-series")} md={2}>
                    <h3 className="middle">Popart series</h3>
                </Col>
            </Row>
        </Container>
    );
}

export default Work;