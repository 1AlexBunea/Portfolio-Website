// Projects.js or Components.js

import './Projects.css'; // Import component styles

//add more projects here
const components = [
  { id: 1, 
    image: '/src/nfl-logo.png', 
    description: `NFL Prospect API` 
  },
  // { id: 1, 
  //   image: 'nfl-logo.png', 
  //   description: `NFL Prospect API` 
  // },
];
const Projects = () => {

  return (
    <div className="projects-container" style={{width:'100%'}}>
      <div className="container mt-4" style={{marginLeft:'auto', marginRight:'auto', justifyContent:'center'}}>
        <h2
          className="display-1 display-sm-2 display-md-3 display-lg-4"
          style={{
            width:'100%',
            color: "rgb(182, 32, 32)",
            paddingBottom: 50,
            textAlign:'center'
          }}
        >
          Portfolio
        </h2>
        <div className="row" >
          {components.map((component) => (
            // change 'col-lg-4 for simple fix for alignment of projects depending on how many
            <div className="col-12 col-md-6 col-lg-6" key={component.id}>
              <div className="component-item" style={{minWidth:300}} onClick={() => window.open(`https://github.com/1AlexBunea/College-Football-API`)}>
                <button className='btn'>
                  <img
                    className="img-fluid shadow"
                    src={component.image}
                    alt="Project"
                    style={{height:250,}}
                  />
                  <div className="description">
                    <p>{component.description}</p>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;