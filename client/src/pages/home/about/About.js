import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.scss';
import aboutImg from '../../../assets/about.jpg'

function About(props) {
    const [display, setDisplay] = useState('none');
    const [display1, setDisplay1] = useState('block');
    const [text, setText] = useState('Read more');

    const updateText = _ => {
        if (display === 'none') {
            setText('Read less');
            setDisplay('block');
            setDisplay1('none');
        } else {
            setText('Read more');
            setDisplay('none');
            setDisplay1('block');
        }
    }

    return (
        <Container className="about" id="about-scroll" fluid>
            <Container>
                <Row>
                    <Col>
                        <img src={aboutImg} alt="Faiza Shaikh" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <p className="content-read">Faiza Shaikh was introduced to art from a very early age.
                        <br />
                        Faiza's obssession with art Continued at Fielden Park Art school in Manchester and after that,
                        <br />
                        South Trafford College for Textile Designing and finally at St Martins college in London.
                        <br />
                        With this knowledge of technique and history of Art,
                        <br />
                        Faiza decided to make her own mark in the Art world.
                        <span id="more" style={{display: display}}>
                            She decided to paint Philosophy, Politics, Poetry and Economics on canvas.
                            <br />
                            Her signature work is recognised by the use of gold and silver leaf
                            <br />
                            scripted with the philosophical message.
                            <br />
                            Her work is rooted in the contemporary world. She chooses not to
                            <br />
                            present the way we are in a manner that questions this
                            <br />
                            or states what we see around us everyday.
                            <br />
                            She is not unconcerned with issues of urban existence, or racial discrimination,
                            <br />
                            of the disparities between the rich and poor.
                            <br />
                            She is a part of this world, she lives and breathes its air as we do,
                            <br />
                            is as affected by its pollutants, but her paintings present a quest for perfection
                            <br />
                            which takes impetus from this world without depicting its context.
                            <br />
                            Faiza has developed a special technique by which the canvas is converted
                            <br />
                            into a luscious, rich silk and velvet texture.
                            <br />
                            Strong bold colours, sharp contrasts and a sense of power and modernity
                            <br />
                            strikes you very strongly when you see her works.
                            <br />
                            Based in London, Faiza has been painting for a while and her work is extremely unusual and eye catching.
                        </span>
                        <br />
                        <br style={{display: display1}} />
                        <span id="myBtn" onClick={updateText} className="read-more">{text}</span>
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default About;