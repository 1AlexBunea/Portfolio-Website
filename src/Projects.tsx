// Projects.js or Components.js

import './Projects.css'; // Import component styles

//add more projects here
const components = [
  { id: 1, 
    image: '/nfl-logo.png', 
    description: `NFL Prospect API` 
  },
  // { id: 2, 
  //   image: 'linked-in.png', 
  //   description: `NFL Prospect API` 
  // },
  // { id: 3, 
  //   image: 'github-logo.png', 
  //   description: `NFL Prospect API` 
  // },
];
const Projects = () => {

  return (
    <div>
      <div className="container mt-4">
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
        <div className="row" style={{marginLeft: 'auto', marginRight:"auto", justifyContent:'center'}}>
          {components.map((component) => (
            // change 'col-lg-4 for simple fix for alignment of projects depending on how many
            <div className="col-12 col-md-6 col-lg-4" key={component.id}>
              <div className="component-item" onClick={() => window.open(`https://github.com/1AlexBunea/College-Football-API`)}>
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