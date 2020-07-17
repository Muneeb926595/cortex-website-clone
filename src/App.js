import React,{useRef,useLayoutEffect} from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import fullPicture from './images/fullPicture.svg';
import Brain from './images/brain.svg';
import {BrowserRouter,NavLink} from 'react-router-dom';

function App() {
  const myAnimation=useRef(null);
  useLayoutEffect(()=>{
    myAnimation.current.animate(
        [
          { transform: 'translateY(0)' },
          { transform: 'translateY(-3%)' },
          { transform: 'translateY(0)' }
        ], {
        direction: "reverse",
        duration: 2400,
        iterations: Infinity
      });
})
  return (
    <BrowserRouter>
      <section id="header">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-10 mx-auto ">
              <div className="row d-flex align-items-center">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                  <h1 className="header-container-title-2">CORTEX</h1>
                  <h4 className="header-container-title-3">COPYWRITER</h4>
                  <h4 className="my-3 intro-title">
                  Enhance your communications with psychology-based copywriting and UX writing
                                </h4>
                  <div className="mt-3">
                    <NavLink className="btn-get-started" to="">Send a message</NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img p-5">
                <img style={{marginBottom:"-500px"}} src={Brain} ref={myAnimation} alt="brain"/>
                  <img src={fullPicture} className="img-fluid" alt="About" />

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BrowserRouter>
  );
}

export default App;
