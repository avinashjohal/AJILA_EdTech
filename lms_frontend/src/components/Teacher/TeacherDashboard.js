import React from 'react';
import { Link } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import { useState, useEffect } from 'react';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api';
function TeacherDashboard() {
  const [dashbardData, setdashbardData] = useState([]);
  const TeacherId = localStorage.getItem('TeacherId');

  useEffect(() => {
    try {
      axios.get(`${baseUrl}/teacher/dashboard/1/`)
        .then((res) => {
          console.log(res);
          setdashbardData(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className="container mt-5">
      <div className='row'>
        <aside className='col-md-3'>
          <TeacherSidebar />
        </aside>
        <section className="col-md-9">
          <div className="row">
          <h1 className='text-center mb-3 text-danger'>Welcome to Teacher's Dashboard</h1>
            <div className="col-md-4 mt-4">
              <div className="card border-primary">
                <h5 className="card-header bg-primary text-white text-center">Total Courses</h5>
                <div className="card-body">
                  <p className='fs-5 text-center'>{dashbardData.total_teacher_courses}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="card border-primary">
                <h5 className="card-header bg-primary text-white text-center">Total Trainings</h5>
                <div className="card-body">
                  <p className='fs-5 text-center'>{dashbardData.total_teacher_trainings}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="card border-primary">
                <h5 className="card-header bg-primary text-white text-center">Total Internships</h5>
                <div className="card-body">
                  <p className='fs-5 text-center'>{dashbardData.total_teacher_internships}</p>
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-4">
              <div className="card border-success">
                <h5 className="card-header bg-success text-white text-center">Total Course Enrolled by Students</h5>
                <div className="card-body">
                  <p className='fs-5 text-center'>{dashbardData.total_teacher_students}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default TeacherDashboard;

