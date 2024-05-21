import React from "react";
import TeacherSidebar from "./TeacherSidebar";
import { useEffect } from "react";


function TeacherProfileSetting() {
  useEffect(() => {
    document.title = "Teacher | Profile Setting";
  }, []);
  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <TeacherSidebar />
        </aside>
        <section className="col-md-9">
          <div className="card">
            <h5 className="card-header">Profile Setting</h5>
            <div className="card-body">
              <div className="mb-3 row">
                <label
                  for="exampleFormControlInput1"
                  className="col-sm-2 col-form-label form-label"
                >
                  Full Name{" "}
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Avinash Johal"
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label
                  for="exampleFormControlInput1"
                  className="col-sm-2 col-form-label form-label"
                >
                  Email{" "}
                </label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label
                  for="exampleFormControlInput1"
                  className="col-sm-2 col-form-label form-label"
                >
                  Profile Photo{" "}
                </label>
                <div className="col-sm-10">
                  <input
                    type="file"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-2 col-form-label">
                  Password
                </label>
                <div className="col-sm-10">
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label
                  for="exampleFormControlInput1"
                  className="col-sm-2 col-form-label form-label"
                >
                  Skills{" "}
                </label>
                <div className="col-sm-10">
                  <textarea type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="python, java, etc.">
                  </textarea>
                </div>
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default TeacherProfileSetting;
