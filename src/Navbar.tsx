

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="https://www.linkedin.com/in/alex-bunea-8901751b6/" target="_blank">Alex Bunea</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link" aria-current="page" href="#">Who I am</a>
                    <a className="nav-link" href="#">Experience</a>
                    <a className="nav-link" href="#">Projects</a>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar