import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
const siteUrl = "http://127.0.0.1:8000/";
const baseUrl = "http://127.0.0.1:8000/api";
function CourseDetail() {
  useEffect(() => {
    document.title = "AJILA | Course Detail"
  }, [])

  const [chapterData, setChapterData] = useState([]);
  const [courseData, setCourseData] = useState([]);
  const [relatedcourseData, setrelatedcourseData] = useState([]);
  const [teacherData, setteacherData] = useState([]);
  const [userLoginStatus, setuserLoginStatus] = useState(null);
  const [enrollStatus, setenrollStatus] = useState(null);


  let { course_id } = useParams();
  const studentId = localStorage.getItem('studentId'); 

  useEffect(() => {
    try {
      axios.get(`${baseUrl}/course/${course_id}/`)
        .then((response) => {
          setCourseData(response.data);
          setChapterData(response.data.course_chapters);
          setteacherData(response.data.teacher);
          setrelatedcourseData(JSON.parse(response.data.related_videos));
        })
    } catch (error) {
      console.log("Failed to fetch chapters:", error);
    };

    // fetch enroll status 
    try {
      axios.get(`${baseUrl}/fetch-course-enroll-status/${studentId}/${course_id}`)
        .then((response) => {
          if(response.data.bool===true){
            setenrollStatus('success')
          }
          // console.log(response)
        })
    } catch (error) {
      console.log("Failed to fetch enroll status:", error);
    };

    const StudentLoginStatus = localStorage.getItem('StudentLoginStatus');
    if (StudentLoginStatus === 'true') {
      setuserLoginStatus('success')
      // window.location.href = '/user-dashboard';
    }

  }, []);// Add course_id as a dependency


  // Student Enroll into course function
  const enrollCourse = () => {

    const formData = new FormData();
    formData.append("course", course_id);
    formData.append("student", studentId);

    axios.post(`${baseUrl}/student-enroll-course/`, formData, {
      headers: {
        "content-type": "multipart/form-data",
      }
    })
      .then((res) => {
        Swal.fire({
          title: 'Success!',
          text: ' You have successfully enrolled into this course.',
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
        setenrollStatus('success')
      })
      .catch((error) => {
        console.log("Enrollment failed:", error);
      });
  };

  // current page 
  return (
    <div className="container my-5">
      <div className="row mb-5">
        <div className="col-4">
          <img src={courseData.featured_img} className="img-thumbnail" alt={courseData.title} />
        </div>
        <div className="col-8">
          <h3>{courseData.title}</h3>
          <p>
            {courseData.description}
          </p>

          <p className="fw-bold">Course By: <Link to={`/teacher-detail/${teacherData.pk}/`}>Guru Ji</Link></p>
          <p className="fw-bold">Techs: {courseData.techs}</p>
          <p className="fw-bold"> Duration: 1 Hrs </p>
          <p className="fw-bold"> Level: Beginner</p>
          <p className="fw-bold"> Language: English</p>
          <p className="fw-bold"> Totel Enrolled: 45k Enrolled</p>
          <p className="fw-bold"> Rating: 4/5</p>
          { userLoginStatus === 'success' && enrollStatus === 'success' && (
           <p><span className="text-info">Already Enrolled in this course.</span></p> 
         )}
          { enrollStatus !== 'success' && userLoginStatus === 'success' && (
            <p><button type="submit" onClick={(event) => enrollCourse(event)} className="btn btn-md btn-success">Enroll Now</button></p>
          )}
          {userLoginStatus !== 'success' && 
            <p><Link to='/user-login' className="text-danger text-decoration-none" >Please Login to Enroll into this course.</Link></p>
          }
     
        </div>
      </div>

      {/* Course videos */}
        <h5>Have any doubt? Click Here <Link to=''>Discord Community</Link></h5>
        <div className="card mt-4">
          <div className="card-header">
            <h3>Curriculum</h3>
          </div>
          {chapterData.map((chapter, index) => (
            <ul className="list-group list-group-flush">
              <li className="list-group-item ">
                {chapter.title}
                <span className="float-end">
                  <span className="me-3">1Hr 30Min</span>
                  {enrollStatus === 'success' && userLoginStatus === 'success' && (
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#videoModal1"
                  >
                    <i className="bi bi-play-circle-fill"></i>
                  </button>
                  )}
                </span>
                {/* <!-- Demo Video modal --> */}

                {/* <!-- Modal --> */}
                <div
                  className="modal fade"
                  id="videoModal1"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                        {chapter.title}
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="ratio ratio-16x9">
                          <video
                          controls
                          className="video-fluid"

                            src={chapter.video}
                            title={chapter.title}
                            allowfullscreen
                          ></video>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          ))}
        </div>
      {/* Courses Videos End */}

      {/* Related Courses */}
      <h3 className="my-4 ">
        <span className="my-3 py-2 px-2 border-bottom border-3 border-dark">
          Related Courses
        </span>
      </h3>
      <div className="row ">
        {relatedcourseData.map((rcourse, index) =>
          <div className="col-md-3 ">
            <div className="card">
              <Link to={`/detail/${rcourse.pk}`}>
                <img src={`${siteUrl}media/${rcourse.fields.featured_img}`} width="100%" height="150px" alt={rcourse.fields.featured_img} />
              </Link>
              <div className="card-body">
                <h5 className="card-title">
                  <Link target="/_blank" to={`/detail/${rcourse.pk}`}>{rcourse.fields.title}</Link>
                </h5>
              </div>
            </div>
          </div>
        )}
        {/* Related course Section End   */}
      </div>
    </div>
  );
}
export default CourseDetail;
