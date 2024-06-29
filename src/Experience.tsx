// this is the component that will list my relevant work experience
// import GnomeWithAnvil from "./SpinningGalaxyComponent"
// import AnimatedComponent from "./AnimatedComponent"
import AlbumComponent from "./AlbumComponent"
import ButtonGroup from "./ButtonGroup"
// import RotatingCube from "./RotatingCube"

function Experience() {
    return (
        <div style={{
            marginLeft:'auto',
            marginRight:"auto",
            justifyContent:'center',
        }}>
            <h1 className="fw-bold display-1 display-sm-2 display-md-3 display-lg-4" style={{
                            // fontSize:'100px',
                            color:'rgb(182, 32, 32)',
                    }}>Professional Experience</h1>
            <h4 style={{paddingBottom:50}}>This is the hub for all the professional work experience I have done</h4>
            {/* <AnimatedComponent></AnimatedComponent> */}
            <div style={{display:'flex'}}>
                <div> {/* The clickable scroll elemenet*/}
                    <ButtonGroup></ButtonGroup>
                </div>
            </div>
            <div style={{marginBottom:'5%'}}>
            </div>
        </div>
    )
}

export default Experience