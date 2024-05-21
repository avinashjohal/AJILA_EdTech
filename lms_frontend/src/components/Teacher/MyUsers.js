import React from 'react';
import { Link } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import { useEffect } from 'react';


function MyUsers() {
    useEffect(() => {
        document.title = 'Teacher | Users Lists';
    }, []);
    return (
        <div className='container mt-4'>
        <div className='row'>
          <aside className='col-md-3'>
            <TeacherSidebar/>
          </aside>
          <section className='col-md-9'>
          <div className='card'>
            <h3 className='card-header'>My Users </h3>
            <div className='card-body'>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Enrolled Courses</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Vishal</td>
                            <td><Link to='/'> Python</Link></td>
                            <td><button className='btn btn-primary'>Continue</button></td>
                        </tr>
                        <tr>
                            <td>Vishal Kumar</td>
                            <td><Link to='/'> Python</Link></td>
                            <td><button className='btn btn-primary'>Continue</button></td>
                        </tr>
                        <tr>
                            <td>Vishal Kumar</td>
                            <td><Link to='/'> Python</Link></td>
                            <td><button className='btn btn-primary'>Continue</button></td>
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

export default MyUsers;
