import React, { Component } from 'react';
import './Footer.scss'
import hb from '../../assets/hb.png'
import PhoneIcon from '@material-ui/icons/Phone';

class Footer extends Component {
    render() {
        return (
            <footer className="footer-distributed">
        <div className="footer-left">
          <h3>Faiza <span>Shaikh</span></h3>
          <p className="footer-links">
            <a href="/mini-series" className="link-1">Mini Series</a>
            <a href="/scripture-series">Scripture Series</a>
            <a href="/doll-series">Doll Series</a>
            <a href="/reflection-series">Reflection Series</a>
            <a href="/monk-series">Monk Series</a>
            <a href="/popart-series">Popart Series</a>
          </p>
          <p className="footer-company-name">All images are under the copyright of the Artist.</p>
          {/* <p className="hb bigS">Developed by</p>
          <a rel="noreferrer" target="_blank" className="hb-logo bigS" href="https://www.instagram.com/hexandbracket"><img src={hb} alt="Hex & Bracket"></img></a> */}
        </div>
        <div className="footer-center">
          {/* <div>
            <i className="fa fa-map-marker" />
            <p><span>First Floor, Ismail Trade Centre</span> Jodia Bazar, Karachi</p>
          </div> */}
          {/* <div>
            <i className="fa fa-phone" />
            <p>+971 1234546</p>
          </div> */}
          <div>
            <i className="fa fa-envelope" />
            <p><a href="mailto:info@faizashaikhart.com">info@faizashaikhart.com</a></p>
          </div>
        </div>
        <div className="footer-right">
          {/* <p className="footer-company-about">
            <span>About me</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p> */}
          <p className="hb smallS">Developed by</p>
          <a rel="noreferrer" target="_blank" className="hb-logo smallS" href="https://www.instagram.com/hexandbracket"><img src={hb} alt="Hex & Bracket"></img></a>
          <div className="footer-icons">
            {/* <a href="#"><i className="fa fa-facebook" /></a> */}
            {/* <a rel="noreferrer" target="_blank" href="https://wa.me/+92333230950"><i className="fa fa-instagram" /></a> */}
            <a target="_blank" href="https://www.instagram.com/faizashaikh/"><i style={{color: 'white'}} className="fa fa-instagram" /></a>
          </div>
        </div>
      </footer>
        );
    }
}

export default Footer;