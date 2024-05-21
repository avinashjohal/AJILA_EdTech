import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api";
function AllCourses() {
  const [courseData, setCourseData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(8);

  useEffect(() => {
    axios.get(baseUrl + "/course/")
      .then((response) => {
        setCourseData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  useEffect(() => {
    document.title = "LMS | All Courses";
  }, []);

  // Get current courses
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courseData.slice(indexOfFirstCourse, indexOfLastCourse);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-4">
      <h3 className="my-4">
        <span className="my-3 py-2 px-4 border rounded-3 border-danger">
          Latest Courses
        </span>
      </h3>
      <div className="row">
        {currentCourses.map((course, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div className="card">
              <Link to={`/course-detail/${course.id}`}>
                <img src={course.featured_img} className="card-img-top" alt={course.title} />
              </Link>
              <div className="card-body">
                <h5 className="card-title">
                  <Link to={`/course-detail/${course.id}`}>{course.title}</Link>
                </h5>
                <p className="card-text">{course.description}</p>
                <Link to={`/course-detail/${course.id}`} className="btn btn-primary">
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          {Array.from({ length: Math.ceil(courseData.length / coursesPerPage) }, (_, i) => (
            <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
              <a onClick={() => paginate(i + 1)} className="page-link" href="#">
                {i + 1}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {/* Pagination Ends */}
    </div>
  );
}

export default AllCourses;