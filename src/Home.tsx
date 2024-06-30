// this is the component that will list my relevant work experience
import './Home.css'


function Home() {
    return (
        <div>
            <div className='container' style={{
                maxWidth:'50%',
                marginLeft:'10%',
            }}>
                <div>
                    <header>
                        <h5>Hello, I am...</h5>
                    </header>
                </div>
                <div>
                    <h1 className="fw-bold display-1 display-sm-2 display-md-3 display-lg-4" style={{
                        // fontSize:'100px',
                        color:'rgb(182, 32, 32)'
                    }}>Alex Bunea</h1>
                </div>
                <div>
                    <h5 className="display-4 display-sm-2 display-md-3 display-lg-4" style={{
                        color:'rgba(224, 134, 92, 0.959)'
                    }}>an aspiring software engineer based in San Francisco!</h5>
                </div>
                <div style={{
                    minWidth:100,
                    width:'80%'
                }}>
                    <h5>Hello visitors, I am Alex Bunea, a computer science student at the University of Texas at Austin who lives in the Bay Area. Thank you for visiting my site, feel free to look around. </h5>
                    <br></br>
                    <h6>I am passionate about coding, software, mathematics and more. I have been coding since 7th grade, and have only enjoyed it more as I've continued to learn.</h6>
                </div>
            </div>
            <div style={{paddingBottom:50}}>

            </div>
        </div>
       
    )
}

export default Home