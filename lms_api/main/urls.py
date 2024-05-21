from django.urls import path
from . import views
from .views import get_roadmap

urlpatterns = [
    # teacher
    path('teacher/', views.TeacherList.as_view()),
    path('teacher/<int:pk>/', views.TeacherDetail.as_view()),
    path('teacher/dashboard/<int:pk>/', views.TeacherDashboard.as_view()),
    path('teacher-login',views.teacher_login, name='teacher_login'),
    
    # category
    path('category/', views.CategoryList.as_view()),


    # course
    path('course/', views.CourseList.as_view()),
    # training
    path('training/', views.TrainingList.as_view()),
    #Internship 
    path('internship/', views.InternshipList.as_view()),


    # chapter
    path('course-chapter/', views.CourseChapterList.as_view()),
    path('training-chapter/', views.TrainingChapterList.as_view()),
    path('internship-chapter/', views.InternshipChapterList.as_view()),


    # spacific course chapter 
    path('course-chapters/<int:course_id>/', views.CourseChapterList.as_view()),
    # spacific training chapter
    path('training-chapters/<int:training_id>/', views.TrainingChapterList.as_view()),
    # spacific internship chapter
    path('internship-chapters/<int:internship_id>/', views.CourseChapterList.as_view()),


    # spacific Coruse chapter
    path('course-chapter/<int:pk>/', views.CourseChapterDetailView.as_view()),
      # spacific Training chapter
    path('training-chapter/<int:pk>/', views.TrainingChapterDetailView.as_view()),
      # spacific Internship chapter
    path('internship-chapter/<int:pk>/', views.InternshipChapterDetailView.as_view()),


    # spacific course detail.
    path('course/<int:pk>/', views.CourseDetailView.as_view()),
    # spacific training detail.
    path('training/<int:pk>/', views.TrainingDetailView.as_view()),
    # spacific internship detail.
    path('internship/<int:pk>/', views.InternshipDetailView.as_view()),
    
    # Teahcer Courses
    path('teacher-courses/<int:teacher_id>/', views.TeacherCourseList.as_view()),
    # Teacher Trainings
    path('teacher-trainings/<int:teacher_id>/', views.TeacherTrainingList.as_view()),
    # Teacher Internships
    path('teacher-internships/<int:teacher_id>/', views.TeacherInternshipList.as_view()),

# Teacher spacific Course Detail
    path('teacher-course-detail/<int:pk>/', views.TeacherCourseDetail.as_view()),
    # Teacher spacific Course Detail
    path('teacher-training-detail/<int:pk>/', views.TeacherTrainingDetail.as_view()),
    # Teacher spacific Course Detail
    path('teacher-internship-detail/<int:pk>/', views.TeacherInternshipDetail.as_view()),

# Studnet
    path('student/', views.StudentList.as_view()),
    path('student/dashboard/<int:pk>/', views.StudentDashboard.as_view()),
    path('student-enroll-course/', views.StudentEntrollCourseList.as_view()),
    path('student-enroll-training/', views.StudentEntrollTrainingList.as_view()),
    path('student-enroll-internship/', views.StudentEntrollInternshipList.as_view()),
    path('user-login',views.student_login, name='student_login'),

# Fetch Enroll course Status
    path('fetch-course-enroll-status/<int:student_id>/<int:course_id>',views.fetch_course_enroll_status),
# Fetch Enroll Training Status
    path('fetch-training-enroll-status/<int:student_id>/<int:training_id>',views.fetch_training_enroll_status),
# Fatch Enroll Internship Status
    path('fetch-internship-enroll-status/<int:student_id>/<int:internship_id>',views.fetch_internship_enroll_status),

# Test AI Roadmap URL.
    path('ai-roadmap/', get_roadmap, name='get_roadmap'),

]