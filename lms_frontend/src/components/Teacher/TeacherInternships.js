import React from "react";
// import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api";
function TeacherInternships() {
  const [internshipData, setinternshipData]=useState([]);

  const teacherId = localStorage.getItem('teacherId');

  // fetch teacher internships
  useEffect(() => {
    try {
      axios.get(`${baseUrl}/teacher-internships/${teacherId}/`).then((response) => {
        setinternshipData(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  

  useEffect(() => {
    document.title = "Teacher | My Internships";
  }, []);
  
  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <TeacherSidebar />
        </aside>
        <section className="col-md-9">
          <div className="card">
            <h3 className="card-header">My Internships </h3>
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>internship Name</th>
                    <th>internship Images</th>
                    <th>Total Enrolled</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {internshipData.map((internship, index) =>
                  <tr>
                    <td><Link to={`/all-chapters/`+internship.id}>{internship.title}</Link></td>
                    <td><img src= {internship.featured_img} width="100" className="rounded" alt={internship.title}/></td>
                    <td><Link to='/'>25k</Link></td>
                    <td>
                      <Link  className="btn btn-info btn-sm" to={`/edit-internship/`+internship.id}>Edit</Link>
                      <Link className="btn btn-success btn-sm ms-2" to={`/add-chapter/`+internship.id}>Add Chapter</Link>
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

export default TeacherInternships;
