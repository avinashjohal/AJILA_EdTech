import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./home.css";

const baseUrl = "http://127.0.0.1:8000/api";
function Home() {
  useEffect(() => {
    document.title = "AJILA | Home";
  }, []);

  const [courseData, setCourseData] = useState([]);
  const [internshipData, setinternshipData] = useState([]);
  const [trainingData, settrainingData] = useState([]);

  // fetch teacher courses
  useEffect(() => {
    try {
      axios.get(baseUrl + "/course/?result=4").then((response) => {
        setCourseData(response.data);

      });
    } catch (error) {
      console.log(error);
    }
  }, []);

    // fetch teacher internship
    useEffect(() => {
      try {
        axios.get(baseUrl + "/internship/?result=4").then((response) => {
          setinternshipData(response.data);
          
        });
      } catch (error) {
        console.log(error);
      }
    }, []);

    // fetch teacher training
    useEffect(() => {
      try {
        axios.get(baseUrl + "/training/?result=4").then((response) => {
          settrainingData(response.data);
          
        });
      } catch (error) {
        console.log(error);
      }
    }, []);


  return (
    <div className="container mt-5">

      {/* header slider start*/}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/bnr_1.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/bnr_2.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/bnr_3.png" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* header slider end*/}



      {/* Latest courses Section Start*/}
      <h3 className="my-4">
        <span className="my-3 py-2 px-4 border rounded-3 border-danger">
          Latest Courses
        </span>
        <Link to="/all-courses" className="float-end">
          <h4>See all</h4>
        </Link>
      </h3>
      <div className="row ">
        {courseData.map((course, index) => (
          <div className="col-md-3 mb-4 ">
            <div className="card">
              <Link to={`/course-detail/${course.id}`}>
                <img src={course.featured_img} className="card-img-top" alt={course.title} />
              </Link>
              <div className="card-body">
                <h5 className="card-title">
                  <Link to={`/course-detail/${course.id}`}>{course.title} </Link>
                </h5>
                <p className="card-text">{course.description}</p>
                <Link to={`/course-detail/${course.id}`} className="btn btn-primary">
                  Details{" "}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/*Latest course Section End  */}

      {/* Popular courses Section Start*/}
      <h3 className="pt-4 my-4">
        <span className="my-3 py-2 px-4 border rounded-3 border-danger">
          Popular Courses
        </span>
        <Link to="/popular-courses" className="float-end">
          <h4>See all</h4>
        </Link>
      </h3>
      <div className="row ">
        {courseData.map((course, index) => (
          <div className="col-md-3 mb-4 ">
            <div className="card">
              <Link to={`/course-detail/${course.id}`}>
                <img src={course.featured_img} className="card-img-top" alt={course.title} />
              </Link>
              <div className="card-body">
                <h5 className="card-title">
                  <Link to={`/course-detail/${course.id}`}>{course.title} </Link>
                </h5>
                <p className="card-text">{course.description}</p>
                <Link to={`/course-detail/${course.id}`} className="btn btn-primary">
                  Details{" "}
                </Link>
              </div>
              <div className="card-footer">
                <div className="title">
                  <span>Rating: 4.5/5</span>
                  <span className="float-end">Views: 15280</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/*Popular course Section End  */}

      {/* Training Section Start */}
      <h3 className="pt-4 my-4">
        <span className="my-3 py-2 px-4 border rounded-3 border-danger">
          Trainings
        </span>{" "}
        <Link to="/all-trainings" className="float-end">
          <h4>See all</h4>
        </Link>
      </h3>
      <div className="row ">
        {trainingData.map((training, index) => (
          <div className="col-md-3 mb-4 ">
            <div className="card">
              <Link to={`/training-detail/${training.id}`}>
                <img src={training.featured_img} className="card-img-top" alt={training.title} />
              </Link>
              <div className="card-body">
                <h5 className="card-title">
                  <Link to={`/training-detail/${training.id}`}>{training.title} </Link>
                </h5>
                <p className="card-text">{training.description}</p>
                <p className="card-text">Duration: {training.duration} months</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Training Section End */}

      {/* Internships Section Start */}
      <h3 className="pt-4 my-4">
        <span className="my-3 py-2 px-4 border rounded-3 border-danger">
          Internships
        </span>{" "}
        <Link to="/all-internships" className="float-end">
          <h4>See all</h4>
        </Link>
      </h3>
      <div className="row ">
        {internshipData.map((internship, index) => (
          <div className="col-md-3 mb-4 ">
            <div className="card">
              <Link to={`/internship-detail/${internship.id}`}>
                <img src={internship.featured_img} className="card-img-top" alt={internship.title} />
              </Link>
              <div className="card-body">
                <h5 className="card-title">
                  <Link to={`/internship-detail/${internship.id}`}>{internship.title} </Link>
                </h5>
                <p className="card-text">{internship.description}</p>
                <p className="card-text">Duration: {internship.duration} months</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Internships Section End */}

      {/* Popular  Teachers Section Starts */}
      <h3 className="pt-4 my-4">
        <span className="my-3 py-2 px-4 border rounded-3 border-danger">
          Popular Teachers
        </span>{" "}
        <Link to="/all-teachers" className="float-end">
          <h4>See all</h4>
        </Link>
      </h3>
      <div className="row ">
          <div className="col-md-3 mb-4">
            <div className="card">
              <Link to="/teacher-detail/2">
                <img src="01.jpg" className="card-img-top" alt="..." />
              </Link>
              <div className="card-body">
                <h5 className="card-title">
                  <Link to="/teacher-detail/2">Alex wood</Link>
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
                  <Link to="/teacher-detail/2">Dobria Sen</Link>
                </h5>
                <p className="card-text">Profession: Java Developer</p>

              </div>
              <div className="card-footer">
                <div className="title">
                  <span>Rating: 4/5</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card">
              <Link to="/teacher-detail/2">
                <img src="03.jpg" className="card-img-top" alt="..." />
              </Link>
              <div className="card-body">
                <h5 className="card-title">
                  <Link to="/teacher-detail/2">Jack sally</Link>
                </h5>
                <p className="card-text">Profession: UX / UI Designer</p>

              </div>
              <div className="card-footer">
                <div className="title">
                  <span>Rating: 5/5</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card">
              <Link to="/teacher-detail/2">
                <img src="04.jpg" className="card-img-top" alt="..." />
              </Link>
              <div className="card-body">
                <h5 className="card-title">
                  <Link to="/teacher-detail/2">Simchen</Link>
                </h5>
                <p className="card-text">Profession: Graphic Designer</p>

              </div>
              <div className="card-footer">
                <div className="title">
                  <span>Rating: 4.5/5</span>
                </div>
              </div>
            </div>
          </div>
      </div>
      {/* Popular Teachers Secion Ends */}

      {/* Student Testimonial Start */}
      <h3 className="pt-4 my-4 text-center">
        <span className="my-3 py-2 px-2 border-bottom border-3 border-dark">
          Testimonials
        </span>{" "}
      </h3>
      <div
        id="carouselExampleIndicators"
        className="carousel slide bg-dark text-white mt-4 py-5 "
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <figure className="text-center">
              <blockquote className="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                Someone famous in{" "}
                <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
          </div>
          <div className="carousel-item">
            <figure className="text-center">
              <blockquote className="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                Someone famous in{" "}
                <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
          </div>
          <div className="carousel-item">
            <figure className="text-center">
              <blockquote className="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                Someone famous in{" "}
                <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Student Testimonial End */}
    </div>
  );
}

export default Home;
