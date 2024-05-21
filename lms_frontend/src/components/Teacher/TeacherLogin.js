import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";


const baseUrl = "http://127.0.0.1:8000/api";
function TeacherLogin() {
  const [teacherLoginData, setteacherLoginData] = useState({
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (event) => {
    setteacherLoginData({
      ...teacherLoginData,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    const teacherFormData = new FormData();
    teacherFormData.append("email", teacherLoginData.email);
    teacherFormData.append("password", teacherLoginData.password);

    try {
      axios
        .post(`${baseUrl}/teacher-login`, teacherFormData)
        .then((response) => {
          // console.log(response.data);
          if (response.data.bool == true) {
            localStorage.setItem('teacherLoginStatus', 'true')
            localStorage.setItem('teacherId', response.data.teacher_id)
            window.location.href = '/teacher-dashboard';
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

  const teacherLoginStatus=localStorage.getItem('teacherLoginStatus');
  if(teacherLoginStatus=='true'){
    window.location.href='/teacher-dashboard';
  }

  // if (response.data.bool === true) {
  //   localStorage.setItem('teacherLoginStatus', 'true');
  //   localStorage.setItem('teacherId', response.data.teacher.id);
  //   localStorage.setItem('teacherName', response.data.teacher.name);
  //   window.location.href = '/teacher-dashboard';
  // }

  useEffect(() => {
    document.title = "Teacher Login";
  }, []);
  return (
    <div className="col-4 offset-4">
      <h2 className="my-4 ">Teacher Login</h2>
      <form>
          {errorMsg && <p className="text-danger">{errorMsg}</p>}
        <div className="mb-3">
          <label for="email" className="form-label">
            Email
          </label>
          <input
            value={teacherLoginData.email}
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
            value={teacherLoginData.password}
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
export default TeacherLogin;
