import React from "react";
import TeacherSidebar from "./TeacherSidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';


const baseUrl = "http://127.0.0.1:8000/api";
function AddTraining() {
  useEffect(() => {
    document.title = "Teacher | Add Courses";
  }, []);

  const [cats, setCats] = useState([]);
  const [trainingData, settrainingData] = useState({
    category: "",
    teacher: "",
    title: "",
    description: "",
    featured_img: "",
    techs: "",
    duration:'',
  });

  // Fetch category
  useEffect(() => {
    try {
      axios.get(baseUrl + "/category/").then((response) => {
        setCats(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  // console.log(cats);

  const handleChange = (event) => {
    settrainingData({
      ...trainingData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (event) => {
    settrainingData({
      ...trainingData,
      [event.target.name]: event.target.files[0],
    });
  };
  // const {category_id} = useParams();
  const formSubmit = () => {
    // const teacherId = localStorage.getItem("teacherId");
    const _formData = new FormData();
    _formData.append("category", trainingData.category); // Send the category ID
    _formData.append("teacher", 1);
    _formData.append("title", trainingData.title);
    _formData.append("description", trainingData.description);
    _formData.append("featured_img", trainingData.featured_img, trainingData.featured_img.name);
    _formData.append("techs", trainingData.techs);
    _formData.append("duration", trainingData.duration);

    try {
      axios.post(baseUrl + "/training/", _formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        Swal.fire({
          title: 'Success!',
          text: 'Chapter updated successfully',
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          toast: true,
          position: 'top-end',
          timer: 3000,
          showConfirmButton: false,
          timerProgressBar: true,
          confirmButtonText: 'OK'
        });
        window.location.href = "/teacher-internships/";
      })
      .catch((error) => {
        console.error('Failed to update chapter:', error);
        Swal.fire({
          title: 'Error!',
          text: 'Failed to update chapter',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <TeacherSidebar />
        </aside>
        <section className="col-md-9">
          <div className="card">
            <h5 className="card-header">Add Training</h5>
            <div className="card-body">
              <div className="mb-3 row">
                <label htmlFor="category" className=" form-label">
                  Category{" "}
                </label>
                <select
                  name="category"
                  onChange={handleChange}
                  className="form-control"
                  aria-describedby="categoryHelp"
                >
                  {cats.map((category, index) => {
                    return (
                      <option key={index} value={category.id}>
                        {category.title}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  value={trainingData.title}
                  onChange={handleChange}
                  name="title"
                  type="text"
                  className="form-control"
                  id="title"
                  aria-describedby="titleHelp"
                  placeholder="Enter your title..."
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  value={trainingData.description}
                  onChange={handleChange}
                  name="description"
                  type="text"
                  className="form-control"
                  id="description"
                  rows="3"
                  aria-describedby="descriptionHelp"
                  placeholder="Enter your description..."
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="featured_img" className="form-label">
                  Featured Image
                </label>
                <input
                  // value={formData.featured_img}
                  onChange={handleFileChange}
                  name="featured_img"
                  type="file"
                  className="form-control"
                  id="featured_img"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="techs" className="form-label">
                  Techs
                </label>
                <textarea
                  value={trainingData.techs}
                  onChange={handleChange}
                  name="techs"
                  type="text"
                  className="form-control"
                  id="techs"
                  rows="3"
                  aria-describedby="techsHelp"
                  placeholder="Enter your techs (e.g., Python, Java, C++)"
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="duration" className="form-label">
                  Duration
                  (in months)
                  </label>
                  <input
                  value={trainingData.duration}
                  onChange={handleChange}
                  name="duration"
                  type="number"
                  className="form-control"
                  id="duration"
                  aria-describedby="durationHelp"
                  placeholder="Enter Internship duration..."
                  />
              </div>
              <div className="col-auto">
                <button
                  type="submit"
                  onClick={formSubmit}
                  className="btn btn-primary mb-3"
                >
                  Add Training
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AddTraining;