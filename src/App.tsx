import { useState } from "react"
import './App.css'
import Experience from "./Experience"
import Project from "./Projects"
import Home from "./Home"
import Sidebar from "./Sidebar"
import RotatingCube from "./RotatingCube"
import ScrollSidebar from "./ScrollSidebar"
import Terminal from "./Terminal"

function App() {

  // 0 => 'home' page 
  // 1 => 'Who I am' page
  // 2 => 'Experience' page
  // 3 => 'Projects' page
  const [page, displayPage] = useState(0) 
  

  return (
    <>
      <div>

          <nav className="navbar fixed-top">
            <div className="container-fluid">
              <div>
                {/* <a className="hyper-link" href="https://www.linkedin.com/in/alex-bunea-8901751b6/" target="_blank">LinkedIn</a> */}
                <button className={page == 0 ? "custom-link-active" : "custom-link-inactive"} onClick={() => displayPage(0)}>Home</button>
                <button className={page == 1 ? "custom-link-active" : "custom-link-inactive"} onClick={() => displayPage(1)}>Experience</button>
                <button className={page == 2 ? "custom-link-active" : "custom-link-inactive"} onClick={() => displayPage(2)}>Projects</button>
                  <button className="custom-link-active image-button" onClick={() => window.open('https://www.linkedin.com/in/alex-bunea-8901751b6/')}>
                      <img className='image-button' src='linked-in.png' alt='LinkedIn' />
                  </button>
                  <button className="custom-link-active image-button" onClick={() => window.open('https://github.com/1AlexBunea')}>
                      <img className="image-button" src='github-logo.png' alt='GitHub' />
                  </button>
              </div>
              <div>
                  <button className="responsive-button">Resume</button>
              </div>
            </div>
          </nav>

          <div 
          style={{
            marginTop:100,
          }}> {/* this is the div that will have the contents */}
            <div>
              <div>
                {page == 2 ? 
                <div className="d-flex zoom-in">
                  <div style={{paddingLeft:50, marginTop:180}}>
                    <Terminal></Terminal>
                  </div>
                  <div className='project-div' style={{marginLeft:'1%', marginRight:'1%'}}>

                    <Project></Project>
                  </div>
                </div>
                : (page == 1 ? 
                  <div className="fade-in" style={{
                    marginLeft:'auto',
                    marginRight:"auto",
                    maxWidth: 'fit-content',
                  }}>
                    <ScrollSidebar></ScrollSidebar>
                    <Experience></Experience>
                  </div>
                : (
                  <div>
                    <div className="slide-in-left" style={{display:'flex'}}>
                        <RotatingCube></RotatingCube>
                        <div>
                          <Home></Home>
                        </div>
                    </div>
                    <div className="sidebar">

                    <Sidebar></Sidebar>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
      </div>
        
    </>
  )
}

export default App
