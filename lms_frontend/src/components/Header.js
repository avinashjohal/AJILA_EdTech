import React from "react";
import { Link } from "react-router-dom";


function Header() {
  const teacherLoginStatus = localStorage.getItem('teacherLoginStatus')
  const StudentLoginStatus = localStorage.getItem('StudentLoginStatus')
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container mt-2">
        <Link className="navbar-brand" to="/">
          <img src="/brand_logo1.png" width="100" height="50" alt="logo" className="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
            <ul className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Explore
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/all-courses">
                    Courses
                  </Link>
                  <Link className="dropdown-item" to="/all-trainings">
                    Trainings
                  </Link>
                  <Link className="dropdown-item" to="/all-internships">
                    Internships
                  </Link>
                </ul>
              </li>

              {/* <Link className="nav-link" to="/explore">Explore</Link> */}
              <Link className="nav-link" to="/ai-roadmap">
                Roadmap
              </Link>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Teacher
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {teacherLoginStatus != 'true' &&
                    <>
                      <li>
                        <Link className="dropdown-item" to="/teacher-login">
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/teacher-register">
                          Register
                        </Link>
                      </li>
                    </>
                  }
                  {teacherLoginStatus == 'true' &&
                    <>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/teacher-dashboard">
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/teacher-logout">
                          Logout
                        </Link>
                      </li>
                    </>
                  }
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  User
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {StudentLoginStatus != 'true' &&
                    <>
                      <li>
                        <Link className="dropdown-item" to="/user-login">
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/user-register">
                          Register
                        </Link>
                      </li>
                    </>
                  }
                  {StudentLoginStatus == 'true' &&
                    <>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/user-dashboard">
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/user-logout">
                          Logout
                        </Link>
                      </li>
                    </>
                  }
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
