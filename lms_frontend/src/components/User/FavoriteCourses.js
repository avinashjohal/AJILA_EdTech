import React from 'react';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import UserSidebar from './UserSidebar';
import { useEffect } from 'react';


function FavoriteCourses() {
    useEffect(()=>{
        document.title='User | Favorite Courses'
    },[])
    return (
        <div className='container mt-4'>
        <div className='row'>
          <aside className='col-md-3'>
            <UserSidebar/>
          </aside>
          <section className='col-md-9'>
          <div className='card'>
            <h3 className='card-header'>Favorite Courses </h3>
            <div className='card-body'>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Course Name</th>
                            <th>Created By</th>
                            <th>Total Lectures</th>
                            <th>Completed Lectures</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Python Full Stack Development</td>
                            <td><Link to='/'> Sir Johan</Link></td>
                            <td>60</td>
                            <td>25</td>
                            <td><button className='btn btn-primary'>Continue</button></td>
                        </tr>
                        <tr>
                            <td>Python Full Stack Development</td>
                            <td><Link to='/'> Sir Johan</Link></td>
                            <td>60</td>
                            <td>25</td>
                            <td><button className='btn btn-primary'>Continue</button></td>
                        </tr>
                        <tr>
                            <td>Python Full Stack Development</td>
                            <td><Link to='/'> Sir Johan</Link></td>
                            <td>60</td>
                            <td>25</td>
                            <td>
                                <span>
                                    <button className='btn btn-primary btn-sm'>Continue</button>
                                </span>
                                <br />
                                <span>
                                    <button className='btn btn-danger btn-sm '>Delete</button>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
          </section>
        </div>
      </div>
        

    );
}

export default FavoriteCourses;
