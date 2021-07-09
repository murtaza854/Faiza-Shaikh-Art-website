import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './Series.scss';
import data from './data';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import {
    slice, concat, 
  } from 'lodash';

function Series(props) {

    let { series } = useParams();
    const url = series;
    series = series.replace(/[^a-zA-Z ]/g, " ")

    const DATA = [
        // {image: '/images/mini.jpg', alt:'mini', title:'Title', price: 'Price'},
    ]
    let key = '';
    let path = '';
    if (series === 'mini sketches') {
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
    data[key].forEach(e => {
        let frame = '';
        let price = '';
        if (e.Frame === 'Yes') frame = '[with frame]';
        else if (e.Frame === 'Oil on Canvas') frame = 'Oil on Canvas';
        if (e.Price !== 'Sold') price = `$ ${e.Price}`;
        else price = 'Sold';
        DATA.push({path: `/${url}/${e.Name.split('.')[0]}`,image: `/images/${path}/${e.Name}`, title: e.Title, size: e.Size, price: price, frame: frame})
    });
    const LENGTH = DATA.length;

    const LIMIT = 12;
    const [showMore,setShowMore] = useState(true);
    const [list,setList] = useState(slice(DATA, 0, LIMIT));
    const [index,setIndex] = useState(LIMIT);

    const numberOfItemsPerPage = 12;
    const numberOfPages = 4;

    if (LENGTH <= LIMIT && showMore) setShowMore(false);

    const loadMore = () =>{
        const newIndex = index + LIMIT;
        const newShowMore = newIndex < (LENGTH - 1);
        const newList = concat(list, slice(DATA, index, newIndex));
        setIndex(newIndex);
        setList(newList);
        setShowMore(newShowMore);
      }

      document.title = `Faiza Shaikh: ${key}`
    return (
        <Container className="series text-center">
            <h1>{series}</h1>
            <ResponsiveMasonry
                columnsCountBreakPoints={{400: 1, 750: 4, 900: 5}}
            >
                <Masonry>
                    {DATA.map((value, index) => (
                        <img
                        onClick={_ => window.location.pathname = value.path}
                            key={index}
                            src={value.image}
                            style={{width: "100%", display: "block"}}
                            alt={value.title}
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
            
            {/* {showMore && <button onClick={loadMore}> Load More </button>} */}
            {/* <Row>
                {list.map((value, index) => {
                    return <Col onClick={_ => window.location.pathname = value.path} key={index} md={3}>
                    <div className="img-container">
                        <img src={value.image} alt={value.title} />
                    </div>
                    <h3>{value.title}</h3>
                    <h5>{value.size}</h5>
                    <h5>{value.frame}</h5>
                    <h5>{value.price}</h5>
                </Col>
                })}
            </Row>
            <Row className="pagination">
            {showMore && <button onClick={loadMore}> Load More </button>}
            </Row> */}
        </Container>
    );
}

export default Series;