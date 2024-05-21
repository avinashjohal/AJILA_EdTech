import React from 'react';
import { Link } from 'react-router-dom';
import UserSidebar from './UserSidebar';
import { useState, useEffect } from 'react';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api';
function UserDashboard() {
    const [dashbardData, setdashbardData] = useState([]);
    const StudentId = localStorage.getItem('StudentId');

    useEffect(() => {
        try {
            axios.get(`${baseUrl}/student/dashboard/1/`)
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
      <div className='row' >
        <aside className='col-md-3'>
          <UserSidebar />
        </aside>
        <section className="col-md-9">
        <h1 className='text-center mb-3 text-danger'>Welcome to User's Dashboard</h1>
          <div className="row">
            <div className="col-md-4 mt-3">
              <div className="card border-primary">
                <h5 className="card-header bg-primary text-white text-center">Enrolled Courses</h5>
                <div className="card-body">
                  <p className='fs-5 text-center'>{dashbardData.enroll_courses}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div className="card border-success">
                <h5 className="card-header bg-success text-white text-center">Enrolled Trainings</h5>
                <div className="card-body">
                  <p className='fs-5 text-center'>{dashbardData.enroll_trainings}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div className="card border-info">
                <h5 className="card-header bg-info text-white text-center">Enrolled Internships</h5>
                <div className="card-body">
                  <p className='fs-5 text-center'>{dashbardData.enroll_internships}</p>
                </div>
              </div>
            </div>
            {/* <div className="col-md-4 mt-3">
              <div className="card border-info">
                <h5 className="card-header bg-info text-white">Enrolled Favorite Courses</h5>
                <div className="card-body">
                  <p>{dashbardData.favorite_courses}</p>
                </div>
              </div>
            </div> */}
            {/* <div className="col-md-4">
              <div className="card border-info">
                <h5 className="card-header bg-info text-white">Pending Assignments</h5>
                <div className="card-body">
                  <Link to="/User-courses">{dashbardData.total_User_chapters}</Link>
                </div>
              </div>
            </div> */}
          </div>
        </section>

      </div>
    </div>
  );
}

export default UserDashboard;

