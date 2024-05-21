import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";


const baseUrl = "http://127.0.0.1:8000/api";
function StudentLogin() {
  const [studentLoginData, setstudentLoginData] = useState({
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (event) => {
    setstudentLoginData({
      ...studentLoginData,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    const studentFormData = new FormData();
    studentFormData.append("email", studentLoginData.email);
    studentFormData.append("password", studentLoginData.password);

    try {
      axios
        .post(`${baseUrl}/user-login`, studentFormData)
        .then((response) => {
          // console.log(response.data);
          if (response.data.bool === true) {
            localStorage.setItem('StudentLoginStatus', 'true')
            localStorage.setItem('studentId', response.data.student_id)
            window.location.href = '/user-dashboard';
          }
          else {
            // Handle login failure
            setErrorMsg("Invalid email or password");
            // alert('Login failed: ' + response.data.error);
        }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const StudentLoginStatus=localStorage.getItem('StudentLoginStatus');
  if(StudentLoginStatus==='true'){
    window.location.href='/user-dashboard';
  }

  // if (response.data.bool === true) {
  //   localStorage.setItem('StudentLoginStatus', 'true');
  //   localStorage.setItem('teacherId', response.data.teacher.id);
  //   localStorage.setItem('teacherName', response.data.teacher.name);
  //   window.location.href = '/teacher-dashboard';
  // }

  useEffect(() => {
    document.title = "User Login";
  }, []);
  return (
    <div className="col-4 offset-4">
      <h2 className="my-4 ">User Login</h2>
      <form>
          {errorMsg && <p className="text-danger">{errorMsg}</p>}
        <div className="mb-3">
          <label for="email" className="form-label">
            Email
          </label>
          <input
            value={studentLoginData.email}
            onChange={handleChange}
            name="email"
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter your Email..."
          />
        </div>
        <div className="mb-3">
          <label for="password" className="form-label">
            Password
          </label>
          <input
            value={studentLoginData.password}
            name="password"
            onChange={handleChange}
            type="password"
            className="form-control"
            id="password"
          />
        </div>
        <button
          type="submit"
          onClick={(event) => submitForm(event)}
          className="btn btn-primary"
        >
          Login
        </button>
      </form>
    </div>
  );
}
export default StudentLogin;
