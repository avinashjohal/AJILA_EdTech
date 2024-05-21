
// Website Components
import React from 'react';
import Header from "./Header";
import Home from "./Home";
import CourseDetail from './CourseDetail'; 
import TrainingDetail from './TrainingDetail';
import InternshipDetail from './InternshipDetail';
import Explore from "./Explore";
import AIRoadmap from "./AIRoadmap";
import AllCourses from './AllCourses';
import PopularCourses from './PopularCourses';
import AllTrainings from './AllTrainings';
import AllInternships from './AllInternships';
import AllTeachers from './AllTeachers';
import CoursesCategory from './CoursesCategory';

// User Components Section
import UserLogin from './User/UserLogin';
import UserLogout from './User/UserLogout';
import UserRegister from './User/UserRegister';
import UserDashboard from './User/UserDashboard';
import MyCourses from './User/MyCourses';
import FavoriteCourses from './User/FavoriteCourses';
import RecommendedCourses from './User/RecommendedCourses';
import ProfileSetting from './User/ProfileSetting';
import ChangePassword from './User/ChangePassword';

// Teachers Components Section
import TeacherRegister from './Teacher/TeacherRegister';
import TeacherLogin from './Teacher/TeacherLogin';
import TeacherLogout from './Teacher/TeacherLogout';
import TeacherDashboard from './Teacher/TeacherDashboard';
import TeacherCourses from './Teacher/TeacherCourses';
import TeacherTrainings from './Teacher/TeacherTrainings';
import TeacherInternships from './Teacher/TeacherInternships';
import AddCourses from './Teacher/AddCourses';
import AddTraining from './Teacher/AddTraining';
import AddInternship from './Teacher/AddInternship';
import EditCourse from './Teacher/EditCourse';
import AddChapter from './Teacher/AddChapter';
import EditChapter from './Teacher/EditChapter';
import AllChapters from './Teacher/CourseChapters';
import MyUsers from './Teacher/MyUsers';
import TeacherProfileSetting from './Teacher/TeacherProfileSetting';
import TeacherChangePassword from './Teacher/TeacherChangePassword';
import TeacherDetail from './TeacherDetail';

// Website Components
import Footer from "./Footer";

import {Routes as Switch, Route} from "react-router-dom";


function Main() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" element= {<Home />} />
        <Route path="/course-detail/:course_id" element= {<CourseDetail />} />
        <Route path="/training-detail/:training_id" element= {<TrainingDetail />} />
        <Route path="/internship-detail/:internship_id" element= {<InternshipDetail />} />
        <Route path="/explore" element= {<Explore />} />
        <Route path="/ai-roadmap" element= {<AIRoadmap />} />
        <Route path="/all-courses" element= {<AllCourses />} />
        <Route path="/popular-courses" element= {<PopularCourses />} />
        <Route path="/all-trainings" element= {<AllTrainings />} />
        <Route path="/all-internships" element= {<AllInternships />} />
        <Route path="/all-teachers" element= {<AllTeachers />} />
        <Route path="/category/:category_slug" element= {<CoursesCategory />} />
        

        {/* User's Component Section */}
        <Route path="/user-login" element= {<UserLogin />} />
        <Route path="/user-logout" element= {<UserLogout />} />
        <Route path="/user-register" element= {<UserRegister />} />
        <Route path="/user-dashboard" element= {<UserDashboard/> } />
        <Route path="/my-courses" element= {<MyCourses/> } />
        <Route path="/favorite-courses" element= {<FavoriteCourses/> } />
        <Route path="/recommended-courses" element= {<RecommendedCourses/> } />
        <Route path="/profile-setting" element= {<ProfileSetting/> } />
        <Route path="/change-password" element= {<ChangePassword/> } />

        {/* Teacher's Component Section */}
        <Route path="/teacher-register" element= {<TeacherRegister/> } />
        <Route path="/teacher-login" element= {<TeacherLogin/> } />
        <Route path="/teacher-dashboard" element= {<TeacherDashboard/> } />
        <Route path="/teacher-courses" element= {<TeacherCourses/> } />
        <Route path="/teacher-trainings" element= {<TeacherTrainings/> } />
        <Route path="/teacher-internships" element= {<TeacherInternships/> } />
        <Route path="/add-courses" element= {<AddCourses/> } />
        <Route path="/add-training" element= {<AddTraining/> } />
        <Route path="/add-internship" element= {<AddInternship/> } />
        <Route path="/edit-course/:course_id" element= {<EditCourse/> } />
        <Route path="/add-chapter/:course_id" element= {<AddChapter/> } />
        <Route path="/edit-chapter/:chapter_id" element= {<EditChapter/> } />
        <Route path="/all-chapters/:course_id" element= {<AllChapters/> } />
        <Route path="/my-users" element= {<MyUsers/> } />
        <Route path="/teacher-change-password" element= {<TeacherChangePassword/> } />
        <Route path="/teacher-profile-setting" element= {<TeacherProfileSetting/> } />
        <Route path="/teacher-detail/:teacher_id" element= {<TeacherDetail/> } />
        <Route path="/teacher-logout" element= {<TeacherLogout/> } />       


      </Switch>
      <Footer/>
    </div>
  );
}

export default Main;