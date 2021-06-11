import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import './Painting.scss';
import data from '../series/data';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function Painting(props) {
    let { series, painting } = useParams();
    let url = series;
    series = series.replace(/[^a-zA-Z ]/g, " ");
    let key = '';
    let path = '';
    if (series === 'mini series') {
        key = 'Mini Sketches';
        path = 'Mini Sketches';
    }
    else if (series === 'scripture series') {
        key = 'Scripture Series';
        path = 'Scriptures';
    }
    else if (series === 'doll series') {
        key = 'Dolls';
        path = 'Dolls';
    }
    else if (series === 'reflection series') {
        key = 'Reflection';
        path = 'Reflection';
    }
    else if (series === 'monk series') {
        key = 'Monks';
        path = 'Monks';
    }
    else if (series === 'popart series') {
        key = 'Popart';
        path = 'Popart';
    } else window.location.pathname = '/';

    const obj = data[key].find(obj => obj.Name.split('.')[0] === painting);

    let frame = '';
    let price = '';
    if (obj.Frame === 'No') frame = '';
    if (obj.Frame === 'Yes') frame = '[with frame]';
    else if (obj.Frame === 'Oil on Canvas') frame = 'Oil on Canvas';

    if (obj.Price !== 'Sold') price = `$ ${obj.Price}`;
    else price = 'Sold';
    document.title = `Faiza Shaikh: ${key}`
    return (
        <div>
            <ArrowBackIcon onClick={_ => window.location.pathname = `/${url}`} className="back-button" />
            <Container className="painting-container">
                <Row>
                    <Col className="second" md={6}>
                        <div className="painting-text">
                            <h1>{obj.Title}</h1>
                            <h5>{obj.Size}</h5>
                            <h5>{frame}</h5>
                            <h5>{price}</h5>
                        </div>
                    </Col>
                    <Col className="first" md={4}>
                    <img src={`/images/${path}/${obj.Name}`} alt={obj.Title} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Painting;