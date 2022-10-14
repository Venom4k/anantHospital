import "./Navigation.css";

function Navigation() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
          <div className="logoName">
         
            <img src={require("./images/logo.png")} className="logo" alt="There is a logo" srcset=""  />
            <span className="logoName">Anant Multispecialist Hospital</span>
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navItem">
              <ul className="navbar-nav me-auto mb-2 navi mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    For Patient
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    For International Patient
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Facilities &#38; Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      
    </>
  );
}
export { Navigation };
