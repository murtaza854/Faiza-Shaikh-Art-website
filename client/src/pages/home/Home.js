import React from 'react';
import { Main, About, Work } from '../home'
import './Home.scss';

function Home(props) {

    const scrollHandler = window.addEventListener('scroll', _ => {
        if (window.location.pathname === "/") {
          var workElement = document.getElementById('work-scroll');
          var backElement = document.getElementById('back-scroll');
          var aboutElement = document.getElementById('about-scroll');
          var circlesElement = document.getElementById('circles-container');
          const circles = document.getElementsByClassName('circle');
          circles[0].classList.remove('active-circle');
          circles[1].classList.remove('active-circle');
          circles[2].classList.remove('active-circle');
          circles[0].classList.remove('white');
          circles[1].classList.remove('white');
          circles[2].classList.remove('white');
          if (backElement.clientHeight - circlesElement.offsetTop > window.scrollY) {
            circles[0].classList.add('active-circle');
            circles[1].classList.remove('active-circle');
            circles[2].classList.remove('active-circle');
          }
          if (circlesElement.offsetTop + (circlesElement.clientHeight / 2) + window.scrollY > aboutElement.offsetTop) {
            circles[1].classList.add('active-circle');
            circles[0].classList.remove('active-circle');
            circles[2].classList.remove('active-circle');
          }
          if (circlesElement.offsetTop + (circlesElement.clientHeight / 2) + window.scrollY > workElement.offsetTop) {
            circles[2].classList.add('active-circle');
            circles[0].classList.remove('active-circle');
            circles[1].classList.remove('active-circle');
            circles[0].classList.add('white');
            circles[1].classList.add('white');
            circles[2].classList.add('white');
          }
        }
      })
      const scrollToMain = _ => {
        var elmnt = document.getElementById("back-scroll");
        elmnt.scrollIntoView();
    }
      const scrollToAbout = _ => {
        var elmnt = document.getElementById("about-scroll");
        elmnt.scrollIntoView();
    }
    const scrollToWork = _ => {
      var elmnt = document.getElementById("work-scroll");
      elmnt.scrollIntoView();
  }
    return (
        <div>
            <Main></Main>
            <About></About>
            <Work></Work>
            <div onScroll={scrollHandler} className="circles" id="circles-container">
                <div onClick={scrollToMain} className="circle active-circle"></div>
                <div onClick={scrollToAbout} className="circle"></div>
                <div onClick={scrollToWork} className="circle"></div>
            </div>
        </div>
    );
}

export default Home;