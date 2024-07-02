import { useState } from "react"
import './App.css'
import Experience from "./Experience"
import Project from "./Projects"
import Home from "./Home"
import Sidebar from "./Sidebar"
import RotatingCube from "./RotatingCube"
import ScrollSidebar from "./ScrollSidebar"
// import Terminal from "./Terminal"

function App() {

  // 0 => 'home' page 
  // 1 => 'Who I am' page
  // 2 => 'Experience' page
  // 3 => 'Projects' page
  const [page, displayPage] = useState(0) 
  

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: 'rgb(231, 175, 175)' }}>
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{backgroundColor:'rgb(231, 175, 175)', width: 200}}>
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Directory</h5>
                  <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-left flex-grow-1">
                    <li className="nav-item">
                      <button
                        className={`nav-link ${page === 0 ? 'active' : ''}`}
                        onClick={() => displayPage(0)}>
                        Home
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className={`nav-link ${page === 1 ? 'active' : ''}`}
                        onClick={() => displayPage(1)}
                      >
                        Experience
                      </button>
                    </li>
                    <li className="nav-item dropdown">
                      <button
                        className={`nav-link ${page === 2 ? 'active' : ''}`}
                        onClick={() => displayPage(2)}
                      >
                        Projects
                      </button>
                    </li>
                    <li>
                      <button className="custom-link-active image-button" onClick={() => window.open('https://www.linkedin.com/in/alex-bunea-8901751b6/')} style={{backgroundColor:'transparent', border:'none', paddingLeft:15}}>
                        <img className="image-button" src="/linked-in.png" style={{ marginTop: 10, marginLeft: -5 }} alt="LinkedIn" />
                      </button>
                    </li>
                    <li>
                      <button className="custom-link-active image-button" onClick={() => window.open('https://github.com/1AlexBunea')} style={{backgroundColor:'transparent', border:'none', paddingLeft:15}}>
                        <img className="image-button" src="/github-logo.png" style={{ marginTop: 10, marginLeft: -5}} alt="GitHub" />
                      </button>
                    </li>
                  </ul>
                </div>
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
                  {/* <div style={{paddingLeft:50, marginTop:180}}>
                    <Terminal></Terminal>
                  </div> */}
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
                    <div className="Sidebar">

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
