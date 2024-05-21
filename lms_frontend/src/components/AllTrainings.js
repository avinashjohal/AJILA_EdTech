import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api";
function AllTrainings() {
  const [trainingData, settrainingData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [trainingsPerPage] = useState(8);

  useEffect(() => {
    axios.get(baseUrl + "/training/")
      .then((response) => {
        settrainingData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching trainings:', error);
      });
  }, []);

  useEffect(() => {
    document.title = "LMS | All Trainings";
  }, []);

  // Get current trainings
  const indexOfLasttraining = currentPage * trainingsPerPage;
  const indexOfFirsttraining = indexOfLasttraining - trainingsPerPage;
  const currenttrainings = trainingData.slice(indexOfFirsttraining, indexOfLasttraining);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-4">
      <h3 className="my-4">
        <span className="my-3 py-2 px-4 border rounded-3 border-danger">
          All Trainings
        </span>
      </h3>
      <div className="row">
        {currenttrainings.map((training, index) => (
          <div key={index} className="col-md-3 mb-4">
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

      {/* Pagination */}
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          {Array.from({ length: Math.ceil(trainingData.length / trainingsPerPage) }, (_, i) => (
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

export default AllTrainings;