import React from "react";
import TeacherSidebar from "./TeacherSidebar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';


const baseUrl = "http://127.0.0.1:8000/api";
function EditCourse() {
  useEffect(() => {
    document.title = "Teacher | Update Course";
  }, []);

  const [cats, setCats] = useState([]);
  const [courseData, setCourseData] = useState({
    category: "",
    teacher: "",
    title: "",
    description: "",
    prev_featured_img:"",
    featured_img: "",
    techs: "",
  });



  // fetchh current course data
  const { course_id } = useParams();

  // Fetch category when page loads
  useEffect(() => {
    try {
      axios.get(baseUrl + "/category/").then((response) => {
        setCats(response.data);
      });
    } catch (error) {
      console.log(error);
    }


    // fetchh current course data
    try {
      axios.get(`${baseUrl}/teacher-course-detail/${course_id}/`)
        .then(response => {
          setCourseData({
            category: response.data.category,
            // teacher: response.data.teacher,
            title: response.data.title,
            description: response.data.description,
            prev_featured_img: response.data.featured_img,
            featured_img:"",
            techs: response.data.techs,
          })                                                                                                                                                                                                                                                                 
        })
    }
    catch (error) {
      console.error('Failed to fetch chapter:', error);
    };
  }, []);

  // console.log(cats);

  const handleChange = (event) => {
    setCourseData({
      ...courseData,
      [event.target.name]: event.target.value,
    });
  };

  
  const handleFileChange = (event) => {
    setCourseData({
      ...courseData,
      [event.target.name]: event.target.files[0],
    });
  };

  const formSubmit = (event) => {
    event.preventDefault();
    const _formData = new FormData();
    _formData.append("category", courseData.category);
    _formData.append("teacher", 1);
    _formData.append("title", courseData.title);
    _formData.append("description", courseData.description);
    if (courseData.featured_img !="") {
      _formData.append("featured_img", courseData.featured_img, courseData.featured_img.name);
    }
    _formData.append("techs", courseData.techs);  

    try {
      axios
        .put(`${baseUrl}/teacher-course-detail/${course_id}/`, _formData, {
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
          window.location.href = "/teacher-courses/";
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
            <h5 className="card-header">Edit Course</h5>
            <div className="card-body">
              <div className="mb-3 row">
                <label htmlFor="category" className=" form-label">
                  Category{" "}
                </label>
                <select
                  value={courseData.category}
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
                  value={courseData.title}
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
                  value={courseData.description}
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

                  onChange={handleFileChange}
                  name="featured_img"
                  type="file"
                  className="form-control"
                  id="featured_img"
                />
                {courseData.prev_featured_img && 
                  <img src={courseData.prev_featured_img} width='50%' alt='prev_featured_img' className='mt-2' />
                }
              </div>
              <div className="mb-3">
                <label htmlFor="techs" className="form-label">
                  Techs
                </label>
                <textarea
                  value={courseData.techs}
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
              <div className="col-auto">
                <button
                  type="submit"
                  onClick={(event) => formSubmit(event)}
                  className="btn btn-primary mb-3"
                >
                  Update Course
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default EditCourse;
