import React from "react";
import TeacherSidebar from "./TeacherSidebar";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const baseUrl = "http://127.0.0.1:8000/api";

function CourseChapters() {
  useEffect(() => {
    document.title = "Teacher | All Chapters";
  }, []);

  const [chapterData, setChapterData] = useState([]);
  const [totalchapter, settotalchapter] = useState(0); // Initialize as an array
  const { course_id } = useParams();

  // Fetch chapters for the course
  // useEffect(() => {
  //     const fetchChapters = async () => {
  //         try {
  //             const response = await axios.get(`${baseUrl}/course-chapters/${course_id}`);
  //             setChapterData(response.data);
  //         } catch (error) {
  //             console.error('Failed to fetch chapters:', error);
  //         }
  //     };

  //     fetchChapters();
  // }, [course_id]);

  // Add course_id as a dependency
  // Fetch chapters for the course
  useEffect(() => {
    const fetchChapters = () => {
      axios
        .get(`${baseUrl}/course-chapters/${course_id}/`)
        .then((response) => {
          settotalchapter(response.data.length);
          setChapterData(response.data);
        })
        .catch((error) => {
          console.error("Failed to fetch chapters:", error);
        });
    };

    fetchChapters();
  }, [course_id]); // Add course_id as a dependency

  const handleDeleteClick = (chapter_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          axios.delete(`${baseUrl}/chapter/${chapter_id}/`).then((res) => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            try {
              axios
                .get(`${baseUrl}/course-chapters/${course_id}`)
                .then((response) => {
                  settotalchapter(response.data.length);
                  setChapterData(response.data);
                });
            } catch (error) {
              console.error("Failed to fetch chapters:", error);
            }
          });
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        } catch (error) {
          console.error("Failed to delete chapter:", error);
          Swal.fire({
            title: "Error!",
            text: "Failed to delete chapter",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      } else {
        Swal.fire("Chapter not deleted!", "", "info");
      }
    });
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <TeacherSidebar />
        </aside>
        <section className="col-md-9">
          <div className="card">
            <h3 className="card-header">All Chapters ({totalchapter})</h3>
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Video</th>
                    <th>Remarks</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {chapterData.map((chapter, index) => (
                    <tr key={index}>
                      <td>
                        <Link to={`/edit-chapter/` + chapter.id}>
                          {chapter.title}
                        </Link>
                      </td>
                      <td style={{ width: "300px" }}>
                        <video
                          controls
                          width="100%"
                          rounded
                          className="mt-2 me-0"
                        >
                          <source src={chapter.video} type="video/mp4" />
                          <source src={chapter.video} type="video/webm" />
                          Your browser does not support the video tag.
                        </video>
                      </td>
                      <td>
                        <Link to="/">{chapter.remarks}</Link>
                      </td>
                      <td>
                        <Link
                          to={`/edit-chapter/` + chapter.id}
                          className="btn btn-info btn-sm"
                        >
                          <i class="bi bi-pencil-square"></i>
                        </Link>
                        <button
                          onClick={() => handleDeleteClick(chapter.id)}
                          className="btn btn-danger btn-sm ms-3"
                        >
                          <i class="bi bi-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CourseChapters;
