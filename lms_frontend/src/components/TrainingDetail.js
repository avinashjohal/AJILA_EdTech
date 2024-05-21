import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
const siteUrl = "http://127.0.0.1:8000/";
const baseUrl = "http://127.0.0.1:8000/api";
function TrainingDetail() {
  useEffect(() => {
    document.title = "AJILA | Training Detail"
  }, [])

  const [chapterData, setChapterData] = useState([]);
  const [trainingData, settrainingData] = useState([]);
  const [relatedtrainingData, setrelatedtrainingData] = useState([]);
  const [teacherData, setteacherData] = useState([]);
  const [userLoginStatus, setuserLoginStatus] = useState(null);
  const [enrollStatus, setenrollStatus] = useState(null);


  const { training_id } = useParams();
  const studentId = localStorage.getItem('studentId'); 

  useEffect(() => {
    try {
      axios.get(`${baseUrl}/training/${training_id}/`)
        .then((response) => {
          settrainingData(response.data);
          setChapterData(response.data.training_chapters);
          setteacherData(response.data.teacher);
          setrelatedtrainingData(JSON.parse(response.data.related_videos));
        })
    } catch (error) {
      console.log("Failed to fetch chapters:", error);
    };

    // fetch enroll status 
    try {
      axios.get(`${baseUrl}/fetch-training-enroll-status/${studentId}/${training_id}`)
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

  }, []);// Add training_id as a dependency


  // Student Enroll into course function
  const enrollTraining = () => {

    const formData = new FormData();
    formData.append("training", training_id);
    formData.append("student", studentId);

    axios.post(`${baseUrl}/student-enroll-training/`, formData, {
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
    <div className="container mt-3">
      <div className="row">
        <div className="col-4">
          <img src={trainingData.featured_img} className="img-thumbnail" alt={trainingData.title} />
        </div>
        <div className="col-8">
          <h3>{trainingData.title}</h3>
          <p>
            {trainingData.description}
          </p>

          <p className="fw-bold">Course By: <Link to={`/teacher-detail/${teacherData.pk}/`}>Guru Ji</Link></p>
          <p className="fw-bold">Techs: {trainingData.techs}</p>
          <p className="fw-bold"> Duration: {trainingData.duration} months</p>
          <p className="fw-bold"> Level: Beginner</p>
          <p className="fw-bold"> Language: English</p>
          <p className="fw-bold"> Totel Enrolled: 45k Enrolled</p>
          <p className="fw-bold"> Rating: 4/5</p>
          { userLoginStatus === 'success' && enrollStatus === 'success' && (
           <p><span className="text-info">Already Enrolled</span></p> 
         )}
          { enrollStatus !== 'success' && userLoginStatus === 'success' && (
            <p><button type="submit" onClick={(event) => enrollTraining(event)} className="btn btn-md btn-success">Enroll Now</button></p>
          )}
          {userLoginStatus !== 'success' && 
            <p><Link to='/user-login' className="text-danger text-decoration-none" >Please Login to Enroll into this Training.</Link></p>
          }
     
        </div>
      </div>

      {/* Course videos */}
      {/* {enrollStatus === 'success' && userLoginStatus === 'success' && ( */}
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
      {/* )} */}
      {/* Courses Videos End */}

      {/* Related Courses */}
      <h3 className="my-4 ">
        <span className="my-3 py-2 px-2 border-bottom border-3 border-dark">
          Related Courses
        </span>
      </h3>
      <div className="row ">
        {relatedtrainingData.map((rtraining, index) =>
          <div className="col-md-3 ">
            <div className="card">
              <Link to={`/detail/${rtraining.pk}`}>
                <img src={`${siteUrl}media/${rtraining.fields.featured_img}`} width="100%" height="150px" alt={rtraining.fields.featured_img} />
              </Link>
              <div className="card-body">
                <h5 className="card-title">
                  <Link target="/_blank" to={`/detail/${rtraining.pk}`}>{rtraining.fields.title}</Link>
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
export default TrainingDetail;
