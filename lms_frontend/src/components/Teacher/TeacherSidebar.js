import React from 'react';
import {Link} from 'react-router-dom';
import { useEffect } from 'react';

function TeacherSidebar() {
    useEffect(() => {
        document.title = "Teacher Dashboard";
    }, []);
  return(
      <div className='card'>
          <div className='list-group list-group-flush'>
              <h5><Link to='/teacher-dashboard' className='list-group-item list-group-item-action'> Teacher Dashboard</Link></h5>
              <Link to='/teacher-courses' className='list-group-item list-group-item-action'>My Courses</Link>
              <Link to='/teacher-trainings' className='list-group-item list-group-item-action'>My Trainings</Link>
              <Link to='/teacher-internships' className='list-group-item list-group-item-action'>My Internships</Link>
              <Link to='/add-courses' className='list-group-item list-group-item-action'>Add Courses</Link>
              <Link to='/add-training' className='list-group-item list-group-item-action'>Add Training</Link>
              <Link to='/add-internship' className='list-group-item list-group-item-action'>Add Internships</Link>
              <Link to='/my-users' className='list-group-item list-group-item-action'>My Users</Link>
              <Link to='/teacher-profile-setting' className='list-group-item list-group-item-action'>Profile Setting</Link>
              <Link to='/teacher-change-password' className='list-group-item list-group-item-action'>Change Password</Link>
              {/* <Link to='/my-subscription' className='list-group-item list-group-item-action'>My Subscription</Link> */}
              <Link to='/teacher-login' className='list-group-item list-group-item-action text-danger'>Logout</Link>
          </div>
      </div>
  )
}

export default TeacherSidebar;