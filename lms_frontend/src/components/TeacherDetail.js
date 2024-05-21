import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function TeacherDetail() {
  
  useEffect(() => {
    document.title = "AJILA | Teacher Detail";
  }, []);
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-4">
          <img src="/logo512.png" className="img-thumbnail" alt="..." />
        </div>
        <div className="col-8">
          <h3>Mr. Jack</h3>
          <p>
            This is Description. I'm sorry for the confusion, but it's not
            possible to convert an image into code. An image is a graphical
            representation, while code is a set of instructions that can be
            executed by a computer.
          </p>
          <p className="fw-bold">
            {" "}
            Skills: <Link to="/category/python">Python </Link>, <Link to="/category/java">Java </Link>,{" "}
            <Link to="/category/ai">AI/ML </Link>
          </p>
          <p className="fw-bold"> Totel Enrolled: 45k Enrolled</p>
          <p className="fw-bold"> Rating: 4/5</p>
        </div>
      </div>

      {/* Course videos */}
      <div className="card mt-4" >
        <h3 className="card-header">Courses List</h3>
        <div className="card-body">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Total Enrolled</th>
                <th>Rating</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><Link to='/detail/1'>Python Full Stack Development</Link></td>
                <td>25</td>
                <td>2/5</td>
                <td>
                  <button className="btn btn-primary">Buy</button>
                </td>
              </tr>
              <tr>
              <td><Link to='/detail/1'>Python Full Stack Development</Link></td>
                <td>25</td>
                <td>2/5</td>
                <td>
                  <button className="btn btn-primary">Buy</button>
                </td>
              </tr>
              <tr>
              <td><Link to='/detail/1'>Python Full Stack Development</Link></td>
                <td>25</td>
                <td>2/5</td>
                <td>
                    <button className="btn btn-primary">Buy</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Courses Videos End */}
    </div>
  );
}

export default TeacherDetail;
