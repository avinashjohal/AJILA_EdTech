import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";


const baseUrl='http://127.0.0.1:8000/api/teacher/'
function TeacherRegister(){
    useEffect(()=>{
        document.title='Teacher Register';
    },[]);

    // use state
    const [teacherData, setteacherData]=useState({
        'full_name':'',
        'email':'',
        'password':'',
        'qualification':'',
        'mobile':'',
        'skills':'',
        'status':''

    });

    // form change
    const handleChange=(event)=>{
        setteacherData({
            ...teacherData,
            [event.target.name]:event.target.value
        });
    }

    // when submit the form
    const submitForm=(event)=>{
        event.preventDefault();
        const teacherFormData = new FormData();
        teacherFormData.append('full_name', teacherData.full_name);
        teacherFormData.append('email', teacherData.email);
        teacherFormData.append('password', teacherData.password);
        teacherFormData.append('qualification', teacherData.qualification);
        teacherFormData.append('mobile', teacherData.mobile);
        teacherFormData.append('skills', teacherData.skills);

        try{
            axios.post(baseUrl,teacherFormData).then((response)=>{
                console.log(response.data);

                setteacherData({
                    'full_name':'',
                    'email':'',
                    'password':'',
                    'qualification':'',
                    'mobile':'',
                    'skills':'',
                    'status':'success'
            
                });
            });
        }catch(error){
            console.log(error);
            setteacherData({'status':'error'})
        }
    };

    const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')
    if(teacherLoginStatus=='true'){
      window.location.href='/teacher-dashboard';
    }

    return(
        <div className="col-6 offset-3">
            {teacherData.status==='success' && <p className="text-success">Thanks for registeration</p>}
            {teacherData.status==='error' && <p className="text-danger">Something wrong heppened!</p>}
        <h2 className="my-4">Teacher Registration</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input onChange={handleChange}
            value={teacherData.full_name}
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
            value={teacherData.email}
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
            value={teacherData.password}
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
            <label htmlFor="qualification" className="form-label">
              Qualification
            </label>
            <input
            value={teacherData.qualification}
            onChange={handleChange}
              type="text"
              className="form-control"
              id="qualification"
              name="qualification"
              aria-label="Qualification"
              placeholder="Enter your qualification"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="mobile" className="form-label">
              Mobile
            </label>
            <input
            value={teacherData.mobile}
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
            <label htmlFor="skills" className="form-label">
              Skills
            </label>
            <textarea
            value={teacherData.skills}
            onChange={handleChange}
              className="form-control"
              id="skills"
              name="skills"
              rows="3"
              aria-label="Skills"
              placeholder="List your skills (e.g., Python, Java, C++)"
            ></textarea>
          </div>
          <button onClick={(event)=>submitForm(event)} type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>      
  )

}
export default TeacherRegister;