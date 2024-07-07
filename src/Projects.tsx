// Projects.js or Components.js
import './Projects.css'; // Import component styles

//add more projects here
const items = [
  { id: 1, 
    image: '/nfl-logo.png', 
    description: `NFL Prospect API`,
    hoverText: 'Database querying project through APIs',
    link:`https://github.com/1AlexBunea/College-Football-API`,
  },
  { id: 2, 
    image: 'dumbbell.png', 
    description: `Fitness Folio`,
    hoverText: 'SpringBoot, PostgreSQL, React Fitness tracker',
    link:`https://github.com/1AlexBunea/FitnessTrackerFrontEnd`,
  },
  // { id: 3, 
  //   image: 'github-logo.png', 
  //   description: `NFL Prospect API`,
  //   hoverText: 'New Text 1',
  // },


];
const Projects = () => {
  return (
    <div>
      <h2
          className="display-1 display-sm-2 display-md-3 display-lg-4"
          style={{
            width:'100%',
            color: "white",
            paddingBottom: 50,
            textAlign:'center'
          }}
        >
          Portfolio
        </h2>
      <div className="gallery">
        {items.map(item => (
          <div key={item.id} className="gallery-item">
            <div className="image-container" onClick={() => window.open(item.link)}>
              <img src={item.image} alt={item.description}/>
              <div className="hover-overlay">
                <p>{item.hoverText}</p>
              </div>
            </div>
            <div className="initial-text">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;