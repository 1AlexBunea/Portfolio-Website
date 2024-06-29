import { useState } from "react"
import './App.css'
import Experience from "./Experience"
import Project from "./Projects"
import Home from "./Home"
import Sidebar from "./Sidebar"
import AnimatedBox from "./RotatingCube"
import RotatingCube from "./RotatingCube"


function App() {

  // 0 => 'home' page 
  // 1 => 'Who I am' page
  // 2 => 'Experience' page
  // 3 => 'Projects' page
  const [page, displayPage] = useState(0) 
  
  function handleClick() {

  }

  return (
    <>
      {/* <div>
      <nav className="navbar navbar-expand-lg" style={{backgroundColor:'#81b29a'}}>
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="https://www.linkedin.com/in/alex-bunea-8901751b6/" target="_blank">LinkedIn</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button className="nav-link custom-link" onClick={() => displayPage(0)}>About Me</button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={() => displayPage(1)}>Experience</button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={() => displayPage(2)}>Projects</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        <div style={{
          marginTop:'auto',
          // backgroundColor:'#f4f1de',
          backgroundColor: '#5f83aa',
          height:2000
        }}>
          <button className="btn btn-secondary">Hello</button>
        </div>
      </div> */}
      <div>
          <nav className="navbar fixed-top">
            <div className="container-fluid">
              <div>
                <a className="hyper-link" href="https://www.linkedin.com/in/alex-bunea-8901751b6/" target="_blank">LinkedIn</a>
                <button className="custom-link" onClick={() => displayPage(0)}>Home</button>
                <button className="custom-link" onClick={() => displayPage(1)}>Experience</button>
                <button className="custom-link" onClick={() => displayPage(2)}>Projects</button>
              </div>
              <div>
                {/* <a className="hyper-link" href="https://www.linkedin.com/in/alex-bunea-8901751b6/" target="_blank">
                  <img src='linked-in.png' style={{
                    maxHeight:'5%',
                    maxWidth:'5%'
                  }}></img>
                </a> */}
                  <button className="responsive-button">Resume</button>
              </div>
            </div>
            
          </nav>

          <div 
          style={{
            marginTop:150,
            marginLeft:'auto',
            marginRight:"auto",
            maxWidth: 'fit-content',
          }}> {/* this is the div that will have the contents */}
            <div>
              <div>
                {page == 2 ? <Project></Project> : (page == 1 ? <Experience></Experience> : (
                  <div style={{display:'flex'}}>
                      <RotatingCube></RotatingCube>
                      <div>
                        <Home></Home>
                      </div>
                  </div>))}
              </div>
            </div>
            <Sidebar></Sidebar>              
          </div>
      </div>
        
    </>
  )
}

export default App
