import React from "react";
import TeacherSidebar from "./TeacherSidebar";
import { useEffect,useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const baseUrl = "http://127.0.0.1:8000/api";
function AddChapter() {
  useEffect(()=>{
    document.title='Teacher | Add Chapter';
  },[]);

  const [chapterData, setChapterData] = useState({
    course:"",
    title: "",
    description: "",
    video: "",
    remarks: "",
  });

  // console.log(cats);

  const handleChange = (event) => {
    setChapterData({
      ...chapterData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (event) => {
    setChapterData({
      ...chapterData,
      [event.target.name]: event.target.files[0],
    });
  };


  const {course_id} = useParams();
  const formSubmit = () => {
    // event.preventDefault();
    const _formData = new FormData();
    _formData.append("course", course_id);
    _formData.append("title", chapterData.title);
    _formData.append("description", chapterData.description);
    _formData.append("video",chapterData.video,chapterData.video.name);
    _formData.append("remarks", chapterData.remarks);
  

    try {
      axios
        .post(baseUrl + "/chapter/", _formData, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log("chapter added successfully");
          window.location.href = '/add-chapter/1';
          
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
            <h5 className="card-header">Add Chapter</h5>
            <div className="card-body">
            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  // value={formData.title}
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
                  // value={formData.description}
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
                <label htmlFor="video" className="form-label">
                  Video
                </label>
                <input
                  // value={formData.featured_img}
                  onChange={handleFileChange}
                  name="video"
                  type="file"
                  className="form-control"
                  id="video"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="remarks" className="form-label">
                  Remarks
                </label>
                <textarea
                  // value={formData.techs}
                  onChange={handleChange}
                  name="remarks"
                  type="text"
                  className="form-control"
                  id="remarks"
                  rows="3"
                  aria-describedby="remarksHelp"
                  placeholder="Enter any remarks..."
                ></textarea>
              </div>
              <div className="col-auto">
                <button
                  type="submit"
                  onClick={formSubmit}
                  className="btn btn-primary mb-3"
                >
                  Add Chapter
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AddChapter;
