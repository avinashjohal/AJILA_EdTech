import React from "react";
// import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api";
function TeacherTrainings() {
  const [trainingData, settrainingData]=useState([]);

  const teacherId = localStorage.getItem('teacherId');

  // fetch teacher trainings
  useEffect(() => {
    try {
      axios.get(`${baseUrl}/teacher-trainings/${teacherId}/`).then((response) => {
        settrainingData(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  

  useEffect(() => {
    document.title = "Teacher | My trainings";
  }, []);
  
  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <TeacherSidebar />
        </aside>
        <section className="col-md-9">
          <div className="card">
            <h3 className="card-header">My Trainings </h3>
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Training Name</th>
                    <th>Training Images</th>
                    <th>Total Enrolled</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {trainingData.map((training, index) =>
                  <tr>
                    <td><Link to={`/all-chapters/`+training.id}>{training.title}</Link></td>
                    <td><img src= {training.featured_img} width="100" className="rounded" alt={training.title}/></td>
                    <td><Link to='/'>25k</Link></td>
                    <td>
                      <Link  className="btn btn-info btn-sm" to={`/edit-training/`+training.id}>Edit</Link>
                      <Link className="btn btn-success btn-sm ms-2" to={`/add-chapter/`+training.id}>Add Chapter</Link>
                      <button className="btn btn-danger btn-sm ms-2">Delete</button>
                    </td>
                  </tr>
                   )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default TeacherTrainings;
