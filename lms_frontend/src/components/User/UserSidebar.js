import React from 'react';
import {Link} from 'react-router-dom';
import { useEffect } from "react";



function UserSidebar() {
    useEffect(() => {
        document.title = "User Dashboard";
    }, []);
  return(
      <div className='card'>
          <div className='list-group list-group-flush'>
              <h5><Link to='/user-dashboard' className='list-group-item list-group-item-action'>Dashboard</Link></h5>
              <Link to='/my-courses' className='list-group-item list-group-item-action'>My Courses</Link>
              <Link to='/favorite-courses' className='list-group-item list-group-item-action'>Favorite Courses</Link>
              <Link to='/recommended-courses' className='list-group-item list-group-item-action'>Recommended Courses</Link>
              <Link to='/profile-setting' className='list-group-item list-group-item-action'>Profile Setting</Link>
              <Link to='/change-password' className='list-group-item list-group-item-action'>Change Password</Link>
              {/* <Link to='/my-subscription' className='list-group-item list-group-item-action'>My Subscription</Link> */}
              <Link to='/user-login' className='list-group-item list-group-item-action text-danger'>Logout</Link>
          </div>
      </div>
  )
}

export default UserSidebar;