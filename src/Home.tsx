// this is the component that will list my relevant work experience
import './Home.css'


function Home() {
    return (
        <div>
            <div className='container' style={{
            }}>
                <div>
                    <h1 className="fw-bold display-1 display-sm-2 display-md-3 display-lg-4" style={{
                        // fontSize:'100px',
                        color:'white'
                    }}>Alex Bunea</h1>
                </div>
                <div>
                    <h5 className="display-4 display-sm-2 display-md-3 display-lg-4" style={{
                        color:'rgb(224, 134, 92)',
                        maxWidth:'90%'
                    }}>an aspiring software engineer based in San Francisco</h5>
                </div>
                <div style={{
                    minWidth:100,
                    width: '85%'
                }}>
                    <br></br>
                    <h5 style={{color:'rgb(255, 121, 31)'}}>
                        With a strong background in software development and a keen interest in innovative technologies, I strive to create impactful solutions. 
                        I enjoy collaborating on exciting projects, continuously learning, and pushing the boundaries of what's 
                        possible in the tech world. Let's connect and explore new opportunities together!
                    </h5>
                    <br></br>
                    <div>
                        <button className='link-button' style={{marginTop:10, paddingRight: 10, paddingLeft:10, marginRight:5, marginLeft:5}} onClick={() => window.open("https://www.linkedin.com/in/alex-bunea-8901751b6/")}>
                            <img src='linked-in.png' style={{height:60, width:60}}></img>
                        </button>
                        <button className='link-button' style={{marginTop:10, padding:10, paddingRight: 10, paddingLeft:10, marginRight:5, marginLeft:5}} onClick={() => window.open("https://github.com/1AlexBunea")}>
                            <img src='github-logo.png' style={{height:50, width:50}}></img>
                        </button>
                        <button className='link-button' style={{marginTop:10, padding:10, paddingRight: 10, paddingLeft:10, marginRight:5, marginLeft:5}} onClick={() => window.location.href = "mailto:1alexbunea@gmail.com?subject=Subject%20Here&body=Body%20content%20here"}>
                            Email Me
                        </button>
                    </div>

                </div>
            </div>
            <div style={{paddingBottom:50}}>

            </div>
        </div>
       
    )
}

export default Home