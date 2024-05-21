import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect} from "react";
import axios from "axios";


const baseUrl='http://127.0.0.1:8000/api'
function AllTeachers() {
  useEffect(() => {
    document.title = "AJILA | Teachers Page";
  }, []);

  const [teacher,setTeacher]=useState(null);
  useEffect(()=>{
    axios.get(baseUrl+"/teacher/").then((response)=>{
      // setTeacher(response.data);
      console.log("component loaded");
      // console.log(response.data);
      // console.log(teacher);
    });
  },[]);

  return (
    <div className="container mt-3">
      {/* Popular Teachers Section Start*/}
      <h3 className="my-4">
        <span className="my-3 py-2 px-4 border rounded-3 border-danger">
          All Popular Teachers
        </span>
      </h3>
      <div className="row ">
        <div className="col-md-3 mb-4 ">
          <div className="card">
            <Link to="/detail/1">
              <img src="01.jpg" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/teacher-detail/1">Teacher Name</Link>
              </h5>
              <p className="card-text">Profession: Python Developer</p>
            </div>
            <div className="card-footer">
              <div className="title">
                <span>Rating: 4.5/5</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <Link to="/teacher-detail/2">
              <img src="02.jpg" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/teacher-detail/2">Teacher Name</Link>
              </h5>
              <p className="card-text">Profession: Python Developer</p>
              
            </div>
            <div className="card-footer">
              <div className="title">
                <span>Rating: 4.5/5</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <Link to="detail/3">
              <img src="03.jpg" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/teacher-detail/3">Teacher Name</Link>
              </h5>
              <p className="card-text">Profession: Python Developer</p>
              
            </div>
            <div className="card-footer">
              <div className="title">
                <span>Rating: 4.5/5</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <Link to="2">
              <img src="04.jpg" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/teacher-detail/4">Teacher Name</Link>
              </h5>
              <p className="card-text">Profession: Python Developer</p>
            </div>
            <div className="card-footer">
              <div className="title">
                <span>Rating: 4.5/5</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <Link to="2">
              <img src="06.jpg" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/teacher-detail/5">Teacher Name</Link>
              </h5>
              <p className="card-text">Profession: Python Developer</p>
              
            </div>
            <div className="card-footer">
              <div className="title">
                <span>Rating: 4.5/5</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <Link to="2">
              <img src="07.jpg" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/teacher-detail/6">Teacher Name</Link>
              </h5>
              <p className="card-text">Profession: Python Developer</p>
            </div>
            <div className="card-footer">
              <div className="title">
                <span>Rating: 4.5/5</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <Link to="2">
              <img src="08.jpg" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/teacher-detail/7">Teacher Name</Link>
              </h5>
              <p className="card-text">Profession: Python Developer</p>
            </div>
            <div className="card-footer">
              <div className="title">
                <span>Rating: 4.5/5</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <Link to="2">
              <img src="09.jpg" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/teacher-detail/8">Teacher Name</Link>
              </h5>
              <p className="card-text">Profession: Python Developer</p>
            </div>
            <div className="card-footer">
              <div className="title">
                <span>Rating: 4.5/5</span>
              </div>
            </div>
          </div>
        </div>
        {/*Latest course Section End  */}

        {/* Pagination */}
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabindex="-1" aria-disabled="true">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default AllTeachers;
