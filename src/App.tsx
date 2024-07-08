import { useState } from "react"
import './App.css'
import Experience from "./Experience"
import Project from "./Projects"
import Home from "./Home"
import RotatingCube from "./RotatingCube"
import ScrollSidebar from "./ScrollSidebar"
import Header from "./Header"
import ScrollToTopButton from './ScrollToTopButton';

function App() {

  // 0 => 'home' page 
  // 1 => 'Who I am' page
  // 2 => 'Experience' page
  // 3 => 'Projects' page
  const [page, displayPage] = useState(3) 
  const name = "Alex Bunea";
  const renderLetters = (text: string) => {
    return text.split('').map((char, index) => (
        <span key={index} className="letter">{char === ' ' ? '\u00A0' : char}</span>
      ));
  };

  return (
    <>
      <div>  
          <div 
          
          > {/* this is the div that will have the contents */}
                {page == 3 ? 
                  
                  <div className="homepage fade-in" style={{backgroundImage: `linear-gradient(to top, rgb(0, 0, 0, 0.8), rgba(35, 35, 35, 0.8)), url("forest.jpg")`}}>
                    <Header displayPage={displayPage}></Header>
                    <div className="content">
                    <header className="header">
                      <h1 className="fw-bold display-1" style={{ color: 'white' }}>
                          {renderLetters(name)}
                      </h1>
                      </header>
                      <p className="white-text">
                      Hello visitors, I am Alex Bunea, a computer science student at the University of Texas at Austin who lives in the Bay Area. 
                      Thank you for visiting my site, feel free to look around.

                      </p>
                      <button className='btn btn-outline-light'onClick={() => displayPage(0)}>Learn More</button>
                    </div>
                  </div>

                : page == 2 ? 
                <div className="zoom-in">
                  <div className="homepage-project">
                  <Header displayPage={displayPage}></Header>
                  </div>
                  <div style={{marginTop:100}}>
                    <Project></Project>
                  </div>
                  <ScrollToTopButton />
                </div>
                : (page == 1 ? 
                  <div className="homepage fade-in">
                    <Header displayPage={displayPage}></Header>
                    <ScrollSidebar></ScrollSidebar>
                    <Experience></Experience>
                    <ScrollToTopButton />
                  </div>
                : (
                  <div>
                    <div className="homepage zoom-in">
                      <Header displayPage={displayPage}></Header>
                      <div className="d-flex" style={{marginTop:100}}>
                        <RotatingCube></RotatingCube>
                        <Home></Home>
                      </div>
                      
                    </div>
                    {/* <div className="Sidebar">
                      <Sidebar></Sidebar>
                    </div>  */}
                    <ScrollToTopButton />

                  </div>
                ))}

              </div>
            </div>
        
    </>
  )
}

export default App
