import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const baseUrl = 'http://127.0.0.1:8000/api/student/'
function UserRegister() {
    useEffect(() => {
        document.title = "User Register";
    }, []);

    // use state
    const [studentData, setstudentData] = useState({
        'full_name': '',
        'email': '',
        'password': '',
        'username': '',
        'mobile': '',
        'interested_categories': '',
        'status': ''

    });

    // form change
    const handleChange = (event) => {
        setstudentData({
            ...studentData,
            [event.target.name]: event.target.value
        });
    }

    // when submit the form
    const submitForm = (event) => {
        event.preventDefault();
        const studentFormData = new FormData();
        studentFormData.append('full_name', studentData.full_name);
        studentFormData.append('email', studentData.email);
        studentFormData.append('password', studentData.password);
        studentFormData.append('username', studentData.username);
        studentFormData.append('mobile', studentData.mobile);
        studentFormData.append('interested_categories', studentData.interested_categories);

        try {
            axios.post(baseUrl, studentFormData).then((response) => {
                console.log(response.data);

                setstudentData({
                    'full_name': '',
                    'email': '',
                    'password': '',
                    'username': '',
                    'mobile': '',
                    'interested_categories': '',
                    'status': 'success'

                });
            });
        } catch (error) {
            console.log(error);
            setstudentData({ 'status': 'error' })
        }
    };

    const studentLoginStatus = localStorage.getItem('studentLoginStatus')
    if (studentLoginStatus == 'true') {
        window.location.href = '/student-dashboard';
    }

    return(
        <div className="col-6 offset-3">
            {studentData.status==='success' && <p className="text-success">Thanks for registeration</p>}
            {studentData.status==='error' && <p className="text-danger">Something wrong heppened!</p>}
        <h2 className="my-4">User Registration</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input onChange={handleChange}
            value={studentData.full_name}
              type="text"
              className="form-control"
              id="name"
              name="full_name"
              aria-label="Full Name"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
            value={studentData.email}
            onChange={handleChange}
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-label="Email"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
            value={studentData.password}
            onChange={handleChange}
              type="password"
              className="form-control"
              id="password"
              name="password"
              aria-label="Password"
              placeholder="Choose a strong password"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              username
            </label>
            <input
            value={studentData.username}
            onChange={handleChange}
              type="text"
              className="form-control"
              id="username"
              name="username"
              aria-label="Username"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="mobile" className="form-label">
              Mobile
            </label>
            <input
            value={studentData.mobile}
            onChange={handleChange}
              type="tel"
              className="form-control"
              id="mobile"
              name="mobile"
              aria-label="Mobile"
              placeholder="Enter your mobile number"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="interests" className="form-label">
              interests
            </label>
            <textarea
            value={studentData.interested_categories}
            onChange={handleChange}
              className="form-control"
              id="interested_categories"
              name="interested_categories"
              rows="3"
              aria-label="interested_categories"
              placeholder="List your interests (e.g., Python, Java, C++)"
            ></textarea>
          </div>
          <button onClick={(event)=>submitForm(event)} type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>      
  )
}

export default UserRegister;