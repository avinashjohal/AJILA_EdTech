from rest_framework import serializers
from . import models
from .models import Roadmap


# Teacher Serializer
class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Teacher
        fields=['id','full_name','email','password','qualification','mobile','skills', 'teacher_courses']
        depth = 1

# Teacher Dashboard Serializer
class TeacherDashboardSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Teacher
        fields=['total_teacher_courses','total_teacher_trainings','total_teacher_internships', 'total_teacher_students']
        depth = 1

# Student Serializer
class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Student
        fields=['id','full_name','email','password','username','mobile','interested_categories']
       
# Student Dashboard Serializer
class StudentDashboardSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Student
        fields=['enroll_courses','enroll_trainings','enroll_internships', 'favorite_courses']
        depth = 1

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=models.CourseCategory
        fields=['id','title','description']
      
        
class CourseSerializer(serializers.ModelSerializer):
    category = serializers.PrimaryKeyRelatedField(queryset=models.CourseCategory.objects.all())
    teacher = serializers.PrimaryKeyRelatedField(queryset=models.Teacher.objects.all())

    class Meta:
        model = models.Course
        fields = ['id', 'category', 'teacher', 'title', 'description', 'featured_img', 'techs','duration', 'course_chapters', 'related_videos']
        depth = 1

class TrainingSerializer(serializers.ModelSerializer):
    category = serializers.PrimaryKeyRelatedField(queryset=models.CourseCategory.objects.all())
    teacher = serializers.PrimaryKeyRelatedField(queryset=models.Teacher.objects.all())

    class Meta:
        model = models.Training
        fields = ['id', 'category', 'teacher', 'title', 'description', 'featured_img', 'techs','duration', 'training_chapters', 'related_videos']
        depth = 1

class InternshipSerializer(serializers.ModelSerializer):
    category = serializers.PrimaryKeyRelatedField(queryset=models.CourseCategory.objects.all())
    teacher = serializers.PrimaryKeyRelatedField(queryset=models.Teacher.objects.all())

    class Meta:
        model = models.Internship
        fields = ['id', 'category', 'teacher', 'title', 'description', 'featured_img', 'techs','duration', 'internship_chapters', 'related_videos']
        depth = 1

# Course Chapter Serializer
class CourseChapterSerializer(serializers.ModelSerializer):
    course_id = serializers.PrimaryKeyRelatedField(queryset=models.Course.objects.all(), source='course', write_only=True)

    class Meta:
        model = models.CourseChapter
        fields = ['id', 'course', 'course_id', 'title', 'description', 'video', 'remarks']
        depth = 1

# Training Chapter Serializer
class TrainingChapterSerializer(serializers.ModelSerializer):
    training_id = serializers.PrimaryKeyRelatedField(queryset=models.Training.objects.all(), source='training', write_only=True)

    class Meta:
        model = models.TrainingChapter
        fields = ['id', 'training', 'training_id', 'title', 'description', 'video', 'remarks']

# Internship Chapter Serializer
class InternshipChapterSerializer(serializers.ModelSerializer):
    internship_id = serializers.PrimaryKeyRelatedField(queryset=models.Internship.objects.all(), source='internship', write_only=True)

    class Meta:
        model = models.InternshipChapter
        fields = ['id', 'internship', 'internship_id', 'title', 'description', 'video', 'remarks']

# class LessonSerializer(serializers.ModelSerializer):
#     class Meta:
#         model=models.Lesson


# Student Course Enrollment 
class StudentCourseEnrollSerializer(serializers.ModelSerializer):
    student = serializers.PrimaryKeyRelatedField(queryset=models.Student.objects.all())

    class Meta:
        model = models.StudentCourseEnrollment
        fields = ['id', 'course', 'student', 'enroll_date']


# Student Training Enrollment
class StudentTrainingEnrollSerializer(serializers.ModelSerializer):
    student = serializers.PrimaryKeyRelatedField(queryset=models.Student.objects.all())

    class Meta:
        model = models.StudentTrainingEnrollment
        fields = ['id', 'training', 'student', 'enroll_date']


# Student Internship Enrollment
class StudentInternshipEnrollSerializer(serializers.ModelSerializer):
    student = serializers.PrimaryKeyRelatedField(queryset=models.Student.objects.all())

    class Meta:
        model = models.StudentInternshipEnrollment
        fields = ['id', 'internship', 'student', 'enroll_date']


# Test Roadmap Generator
class RoadmapSerializer(serializers.ModelSerializer):
    class Meta:
        model = Roadmap
        fields = ['type', 'name', 'steps']
