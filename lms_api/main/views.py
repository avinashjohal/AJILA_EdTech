from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import permissions
from .serializers import TeacherSerializer, TeacherDashboardSerializer
from .serializers import StudentSerializer, StudentDashboardSerializer
from .serializers import CategorySerializer
from .serializers import CourseSerializer
from .serializers import TrainingSerializer
from .serializers import InternshipSerializer
from .serializers import CourseChapterSerializer, TrainingChapterSerializer, InternshipChapterSerializer
from django.core.exceptions import ObjectDoesNotExist
from .serializers import StudentCourseEnrollSerializer, StudentTrainingEnrollSerializer, StudentInternshipEnrollSerializer
# from .serializers import TeacherCourseSerializer
from . import models

from rest_framework.decorators import api_view
from rest_framework import status
from .models import Roadmap
from .serializers import RoadmapSerializer

@api_view(['GET'])
def get_roadmap(request):
    roadmap_type = request.GET.get('type')
    roadmap_name = request.GET.get('name')
    
    try:
        roadmap = Roadmap.objects.get(type=roadmap_type, name=roadmap_name)
        serializer = RoadmapSerializer(roadmap)
        return Response(serializer.data)
    except Roadmap.DoesNotExist:
        return Response({'message': 'Roadmap not found'}, status=status.HTTP_404_NOT_FOUND)


# Teacher Views Section.
class TeacherList(generics.ListCreateAPIView):
    queryset = models.Teacher.objects.all()
    serializer_class = TeacherSerializer
    # permission_classes=[permissions.IsAuthenticated]
    
class TeacherDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Teacher.objects.all()
    serializer_class = TeacherSerializer
    # permission_classes=[permissions.IsAuthenticated]

class TeacherDashboard(generics.RetrieveAPIView):
    queryset = models.Teacher.objects.all()
    serializer_class = TeacherDashboardSerializer
    # permission_classes=[permissions.IsAuthenticated]

class StudentDashboard(generics.RetrieveAPIView):
    queryset = models.Student.objects.all()
    serializer_class = StudentDashboardSerializer
    # permission_classes=[permissions.IsAuthenticated]


@csrf_exempt    
def teacher_login(request):
    email = request.POST.get('email')
    password = request.POST.get('password')
    if not email or not password:
        return JsonResponse({'bool': False, 'error': 'Email and password are required'})

    try:
        teacherData = models.Teacher.objects.get(email=email, password=password)
        return JsonResponse({'bool': True, 'teacher_id': teacherData.id})
    except ObjectDoesNotExist:
        return JsonResponse({'bool': False, 'error': 'Invalid credentials'})
    

# Category List View
class CategoryList(generics.ListCreateAPIView):
    queryset = models.CourseCategory.objects.all()
    serializer_class = CategorySerializer
    # permission_classes=[permissions.IsAuthenticated]    
    
# Course List View
class CourseList(generics.ListCreateAPIView):
    queryset = models.Course.objects.all()
    serializer_class = CourseSerializer
    # permission_classes=[permissions.IsAuthenticated]

    def get_queryset(self):
        qs=super().get_queryset()
        if 'result' in self.request.GET:
            limit=self.request.GET['result']
            qs=models.Course.objects.all().order_by('-id')[:int(limit)]
        return qs  

# Training List View
class TrainingList(generics.ListCreateAPIView):
    queryset = models.Training.objects.all()
    serializer_class = TrainingSerializer
    # permission_classes=[permissions.IsAuthenticated]

    def get_queryset(self):
        qs=super().get_queryset()
        if 'result' in self.request.GET:
            limit=self.request.GET['result']
            qs=models.Training.objects.all().order_by('-id')[:int(limit)]
        return qs   

# Internship List view
class InternshipList(generics.ListCreateAPIView):
    queryset = models.Internship.objects.all()
    serializer_class = InternshipSerializer
    # permission_classes=[permissions.IsAuthenticated]

    def get_queryset(self):
        qs=super().get_queryset()
        if 'result' in self.request.GET:
            limit=self.request.GET['result']
            qs=models.Internship.objects.all().order_by('-id')[:int(limit)]
        return qs 
        
# # Chapter List View
# class CourseChapterList(generics.ListCreateAPIView):
#     queryset = models.CourseChapter.objects.all()
#     serializer_class = CourseChapterSerializer
#     # permission_classes=[permissions.IsAuthenticated]  

# Teacher Course List 
class TeacherCourseList(generics.ListCreateAPIView):
    serializer_class = CourseSerializer
    # permission_classes=[permissions.IsAuthenticated]

    def get_queryset(self):
        teacher_id = self.kwargs['teacher_id']
        teacher = models.Teacher.objects.get(pk=teacher_id)
        return models.Course.objects.filter(teacher=teacher)

# Teacher Training View 
class TeacherTrainingList(generics.ListCreateAPIView):
    serializer_class = TrainingSerializer
    # permission_classes=[permissions.IsAuthenticated]

    def get_queryset(self):
        teacher_id = self.kwargs['teacher_id']
        teacher = models.Teacher.objects.get(pk=teacher_id)
        return models.Training.objects.filter(teacher=teacher)
    
# Teacher Internship View
class TeacherInternshipList(generics.ListCreateAPIView):
    serializer_class = InternshipSerializer
    # permission_classes=[permissions.IsAuthenticated]

    def get_queryset(self):
        teacher_id = self.kwargs['teacher_id']
        teacher = models.Teacher.objects.get(pk=teacher_id)
        return models.Internship.objects.filter(teacher=teacher)
    

# Course Chapters List
class CourseChapterList(generics.ListCreateAPIView):
    serializer_class = CourseChapterSerializer
    # permission_classes=[permissions.IsAuthenticated]

    def get_queryset(self):
        course_id = self.kwargs['course_id']
        course = models.Course.objects.get(pk=course_id)
        return models.CourseChapter.objects.filter(course=course)

# Training Chapter List
class TrainingChapterList(generics.ListCreateAPIView):
    serializer_class = TrainingChapterSerializer
    # permission_classes=[permissions.IsAuthenticated]

    def get_queryset(self):
        training_id = self.kwargs['training_id']
        training = models.Training.objects.get(pk=training_id)
        return models.TrainingChapter.objects.filter(training=training)

# Internship Chapter List
class InternshipChapterList(generics.ListCreateAPIView):
    serializer_class = InternshipChapterSerializer
    # permission_classes=[permissions.IsAuthenticated]

    def get_queryset(self):
        internship_id = self.kwargs['internship_id']
        internship = models.Internship.objects.get(pk=internship_id)
        return models.InternshipChapter.objects.filter(internship=internship)

# Coruse Chapter Detail view
class CourseChapterDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.CourseChapter.objects.all()
    serializer_class = CourseChapterSerializer

# Training Chapter Detail view
class TrainingChapterDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.TrainingChapter.objects.all()
    serializer_class = TrainingChapterSerializer

# Internship Chapter Detail view
class InternshipChapterDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.InternshipChapter.objects.all()
    serializer_class = InternshipChapterSerializer


# Course Detail view.
class CourseDetailView(generics.RetrieveAPIView):
    queryset = models.Course.objects.all()
    serializer_class = CourseSerializer

# Training Detail view.
class TrainingDetailView(generics.RetrieveAPIView):
    queryset = models.Training.objects.all()
    serializer_class = TrainingSerializer

# Internship Detail View.
class InternshipDetailView(generics.RetrieveAPIView):
    queryset = models.Internship.objects.all()
    serializer_class = InternshipSerializer

class TeacherCourseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Course.objects.all()
    serializer_class = CourseSerializer
    # permission_classes=[permissions.IsAuthenticated]

class TeacherTrainingDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Training.objects.all()
    serializer_class = TrainingSerializer
    # permission_classes=[permissions.IsAuthenticated]

class TeacherInternshipDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Internship.objects.all()
    serializer_class = InternshipSerializer
    # permission_classes=[permissions.IsAuthenticated]

# Student Data
class StudentList(generics.ListCreateAPIView):
    queryset = models.Student.objects.all()
    serializer_class = StudentSerializer
    # permission_classes=[permissions.IsAuthenticated]

@csrf_exempt   
def student_login(request):
    email = request.POST.get('email')
    password = request.POST.get('password')
    if not email or not password:
        return JsonResponse({'bool': False, 'error': 'Email and password are required'})

    try:
        studentData = models.Student.objects.get(email=email, password=password)
        return JsonResponse({'bool': True, 'student_id': studentData.id})
    except ObjectDoesNotExist:
        return JsonResponse({'bool': False, 'error': 'Invalid credentials'})

# Create your views here.
class StudentEntrollCourseList(generics.ListCreateAPIView):
    queryset = models.StudentCourseEnrollment.objects.all()
    serializer_class = StudentCourseEnrollSerializer
    # permission_classes=[permissions.IsAuthenticated]

# Create your views here.
class StudentEntrollTrainingList(generics.ListCreateAPIView):
    queryset = models.StudentTrainingEnrollment.objects.all()
    serializer_class = StudentTrainingEnrollSerializer
    # permission_classes=[permissions.IsAuthenticated]

# Create your views here.
class StudentEntrollInternshipList(generics.ListCreateAPIView):
    queryset = models.StudentInternshipEnrollment.objects.all()
    serializer_class = StudentInternshipEnrollSerializer
    # permission_classes=[permissions.IsAuthenticated]


# Course Enroll Status Fatch
def fetch_course_enroll_status(request, student_id, course_id):
    student=models.Student.objects.filter(id=student_id).first()
    course=models.Course.objects.filter(id=course_id).first()
    enrollStatus=models.StudentCourseEnrollment.objects.filter(student=student, course=course).count()
    if enrollStatus:
        return JsonResponse({'bool': True})
    else:
        return JsonResponse({'bool': False})

# Training Enroll Status Fatch
def fetch_training_enroll_status(request, student_id, training_id):
    student=models.Student.objects.filter(id=student_id).first()
    training=models.Training.objects.filter(id=training_id).first()
    enrollStatus=models.StudentTrainingEnrollment.objects.filter(student=student, training=training).count()
    if enrollStatus:
        return JsonResponse({'bool': True})
    else:
        return JsonResponse({'bool': False})

# Internship Enroll Status Fatch
def fetch_internship_enroll_status(request, student_id, internship_id):
    student=models.Student.objects.filter(id=student_id).first()
    internship=models.Internship.objects.filter(id=internship_id).first()
    enrollStatus=models.StudentInternshipEnrollment.objects.filter(student=student, internship=internship).count()
    if enrollStatus:
        return JsonResponse({'bool': True})
    else:
        return JsonResponse({'bool': False})





