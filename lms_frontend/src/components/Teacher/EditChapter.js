import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import TeacherSidebar from "./TeacherSidebar";

const baseUrl = "http://127.0.0.1:8000/api";
function EditChapter() {
  const [chapterData, setChapterData] = useState({
    course: "",
    title: "",
    description: "",
    prev_video: "",
    video: "",
    remarks: "",
  });


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

  const { chapter_id } = useParams();

  const formSubmit = (event) => {
    event.preventDefault();
    const _formData = new FormData();
    _formData.append("course", chapterData.course);
    _formData.append("title", chapterData.title);
    _formData.append("description", chapterData.description);
    if (chapterData.video !=" ") {
      _formData.append("video", chapterData.video, chapterData.video.name);
    }
    _formData.append("remarks", chapterData.remarks);

    try {
      axios
        .put(`${baseUrl}/chapter/${chapter_id}/`, _formData, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
            Swal.fire({
              title: "Success!",
              text: "Chapter updated successfully",
              icon: "success",
              showCancelButton: false,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              toast: true,
              position: "top-end",
              timer: 3000,
              showConfirmButton: false,
              timerProgressBar: true,
              confirmButtonText: "OK",
            });
            window.location.href = "/teacher-courses/";
        });
    } catch (error) {
      console.log("Failed to update chapter:", error);
    }
  };

  // Fetch current chapter data
  useEffect(() => {
    try {
      axios.get(`${baseUrl}/chapter/${chapter_id}/`).then((response) => {
        setChapterData({
          course: response.data.course,
          title: response.data.title,
          description: response.data.description,
          prev_video: response.data.video,
          remarks: response.data.remarks,
          video: " ",
        });
      });
    } catch (error) {
      console.log("Failed to fetch chapter:", error);
    }
  }, []);
  // End


  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <TeacherSidebar />
        </aside>
        <section className="col-md-9">
          <div className="card">
            <h5 className="card-header">Edit Chapter</h5>
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  value={chapterData.title}
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
                  value={chapterData.description}
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
                  Chapter Video
                </label>
                <input
                  onChange={handleFileChange}
                  name="video"
                  type="file"
                  className="form-control"
                  id="video"
                />
                {chapterData.prev_video && 
                  <video controls width="50%" className="mt-2">
                    <source src={chapterData.prev_video} type="video/mp4" />
                  </video>
                }
              </div>
              <div className="mb-3">
                <label htmlFor="remarks" className="form-label">
                  Remarks
                </label>
                <textarea
                  value={chapterData.remarks}
                  onChange={handleChange}
                  name="remarks"
                  type="text"
                  className="form-control"
                  id="remarks"
                  rows="3"
                  aria-describedby="remarksHelp"
                  placeholder="This chapter is about...."
                ></textarea>
              </div>
              <div className="col-auto">
                <button
                  type="submit"
                  onClick={(event)=>formSubmit(event)}
                  className="btn btn-primary mb-3"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default EditChapter;

// {chapterData.prev_video &&
//     <video controls width='50%' className="mt-2">
//         <source src={chapterData.prev_video} type="video/mp4" />
//     </video>
// }
