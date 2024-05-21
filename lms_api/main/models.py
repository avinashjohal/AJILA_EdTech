from django.db import models
from django.core import serializers

# Teachers Model.
class Teacher(models.Model):

  full_name = models.CharField(max_length=100)
  email = models.CharField(max_length=128)
  password = models.CharField(max_length=100, blank=True, null=True)
  qualification = models.CharField(max_length=200)
  mobile = models.CharField(max_length=20)
  profile_img = models.ImageField(upload_to="teacher/profile_imgs/", null=True)
  skills = models.TextField()

  class Meta:
      verbose_name_plural = "Teachers"

  def skill_list(self):
      """Returns a list of skills from the skills field."""
      return self.skills.split(',')

  def total_teacher_courses(self):
      """Returns the total number of courses taught by the teacher."""
      return Course.objects.filter(teacher=self).count()
  
  def total_teacher_trainings(self):
      """Returns the total number of courses taught by the teacher."""
      return Training.objects.filter(teacher=self).count()
  
  def total_teacher_internships(self):
      """Returns the total number of courses taught by the teacher."""
      return Internship.objects.filter(teacher=self).count()

  def total_teacher_students(self):
      """Returns the total number of students enrolled in the teacher's courses."""
      return StudentCourseEnrollment.objects.filter(course__teacher=self).count()
        

# Course Category Model
class CourseCategory(models.Model):
    title=models.CharField(max_length=150)
    description=models.TextField()
    
    
    # This Meta class is for modification. Okay
    class Meta:
        verbose_name_plural="2. Course Categories"
        
    def __str__(self):
        return self.title    
    
# Course Model
class Course(models.Model):
    category = models.ForeignKey(CourseCategory, on_delete=models.CASCADE)
    teacher=models.ForeignKey(Teacher, on_delete=models.CASCADE, related_name='teacher_courses')
    title=models.CharField(max_length=150)
    description=models.TextField()
    featured_img=models.ImageField( upload_to='course_imgs/', null=True)
    techs=models.TextField(null=True)
    duration=models.CharField(max_length=100,  default='Unspecified')
    
        # This Meta class is for modification. Okay
    class Meta:
        verbose_name_plural="3. Courses"

    def related_videos(self):
        related_videos=Course.objects.filter(techs__icontains=self.techs)
        return serializers.serialize('json', related_videos)
    
    def __str__(self):
        return self.title

# Training Model
class Training(models.Model):
    category = models.ForeignKey(CourseCategory, on_delete=models.CASCADE)
    teacher=models.ForeignKey(Teacher, on_delete=models.CASCADE, related_name='teacher_trainings')
    title=models.CharField(max_length=150)
    description=models.TextField()
    featured_img=models.ImageField( upload_to='course_imgs/', null=True)
    techs=models.TextField(null=True)
    duration=models.CharField(max_length=100)
    
        # This Meta class is for modification. Okay
    class Meta:
        verbose_name_plural="4. Trainings"

    def related_videos(self):
        related_videos=Training.objects.filter(techs__icontains=self.techs)
        return serializers.serialize('json', related_videos)
    
    def __str__(self):
        return self.title    
    
# Internship Model
class Internship(models.Model):
    category = models.ForeignKey(CourseCategory, on_delete=models.CASCADE)
    teacher=models.ForeignKey(Teacher, on_delete=models.CASCADE, related_name='teacher_internships')
    title=models.CharField(max_length=150)
    description=models.TextField()
    featured_img=models.ImageField( upload_to='course_imgs/', null=True)
    techs=models.TextField(null=True)
    duration=models.CharField(max_length=100)
    
        # This Meta class is for modification. Okay
    class Meta:
        verbose_name_plural="5. Internships"

    def related_videos(self):
        related_videos=Internship.objects.filter(techs__icontains=self.techs)
        return serializers.serialize('json', related_videos)
    
    def __str__(self):
        return self.title  

# Course Chapter Model
class CourseChapter(models.Model):
    course=models.ForeignKey(Course, on_delete=models.CASCADE, related_name='course_chapters')
    title=models.CharField(max_length=150)
    description=models.TextField()
    video=models.FileField( upload_to='chapter_videos/', null=True)
    remarks=models.TextField(null=True)

    class Meta:
        verbose_name_plural="6. Course Chapters"

# Training Chapter Model
class TrainingChapter(models.Model):
    training=models.ForeignKey(Training, on_delete=models.CASCADE, related_name='training_chapters')
    title=models.CharField(max_length=150)
    description=models.TextField()
    video=models.FileField( upload_to='chapter_videos/', null=True)
    remarks=models.TextField(null=True)

    class Meta:
        verbose_name_plural="7. Training Chapters"

# Internship Chapter Model
class InternshipChapter(models.Model):
    internship=models.ForeignKey(Internship, on_delete=models.CASCADE, related_name='internship_chapters')
    title=models.CharField(max_length=150)
    description=models.TextField()
    video=models.FileField( upload_to='chapter_videos/', null=True)
    remarks=models.TextField(null=True)

    class Meta:
        verbose_name_plural="8. Intership Chapters"

# Student Model
class Student(models.Model):
    id=models.AutoField(primary_key=True)
    full_name=models.CharField(max_length=100)
    email=models.CharField(max_length=100)
    password=models.CharField(max_length=100)
    username=models.CharField(max_length=100)
    mobile=models.CharField(max_length=20)
    interested_categories=models.TextField()
    
        # This Meta class is for modification. Okay
    class Meta:
        verbose_name_plural="9. Students"
    
    def __str__(self):
        return self.full_name  
        
    def enroll_courses(self):
        """Returns the total number of courses taught by the teacher."""
        enroll_courses = StudentCourseEnrollment.objects.filter(student=self).count()
        return enroll_courses;
  
    def enroll_trainings(self):
        """Returns the total number of courses taught by the teacher."""
        enroll_trainings = StudentTrainingEnrollment.objects.filter(student=self).count()
        return enroll_trainings;
  
    def enroll_internships(self):
        """Returns the total number of courses taught by the teacher."""
        enroll_internships = StudentInternshipEnrollment.objects.filter(student=self).count()
        return enroll_internships;
    
    def favorite_courses(self):
        """Returns the total number of courses taught by the teacher."""
        favorite_courses = StudentFavoriteCourse.objects.filter(student=self).count()
        return favorite_courses;

    # def completed_assignment(self):
    #     """Returns the total number of students enrolled in the teacher's courses."""
    #     return StudentCourseEnrollment.objects.filter(course__teacher=self).count()
    
    # def pending_assignment(self):
    #     """Returns the total number of students enrolled in the teacher's courses."""
    #     return StudentCourseEnrollment.objects.filter(course__teacher=self).count()
      
# Student Enrollment into Course.
class StudentCourseEnrollment(models.Model):
    course=models.ForeignKey(Course, on_delete=models.CASCADE, related_name = 'enrolled_courses')
    student=models.ForeignKey(Student, on_delete=models.CASCADE, related_name = 'enrolled_course_student')
    enroll_date=models.DateTimeField(auto_now_add=True)
    
        # This Meta class is for modification. Okay
    class Meta:
        verbose_name_plural="10. Enrolled Courses"

        def __str__(self):
            return f"{self.course}-{self.course}";

# Student Enrollment into Course.
class StudentTrainingEnrollment(models.Model):
    training=models.ForeignKey(Training, on_delete=models.CASCADE, related_name = 'enrolled_training')
    student=models.ForeignKey(Student, on_delete=models.CASCADE, related_name = 'enrolled_training_student')
    enroll_date=models.DateTimeField(auto_now_add=True)
    
        # This Meta class is for modification. Okay
    class Meta:
        verbose_name_plural="11. Enrolled Training"

        def __str__(self):
            return f"{self.training}-{self.training}";


# Student Enrollment into Course.
class StudentInternshipEnrollment(models.Model):
    internship=models.ForeignKey(Internship, on_delete=models.CASCADE, related_name = 'enrolled_internship')
    student=models.ForeignKey(Student, on_delete=models.CASCADE, related_name = 'enrolled_internship_student')
    enroll_date=models.DateTimeField(auto_now_add=True)
    
        # This Meta class is for modification. Okay
    class Meta:
        verbose_name_plural="12. Enrolled Internship"

        def __str__(self):
            return f"{self.internship}-{self.internship}";


# Test AI Roasdmap Model
class Roadmap(models.Model):
    TYPE_CHOICES = [
        ('skill', 'Skill'),
        ('role', 'Role'),
    ]
    type = models.CharField(max_length=10, choices=TYPE_CHOICES)
    name = models.CharField(max_length=100)
    steps = models.JSONField()  # Using JSONField to store steps and resources

    class Meta:
        verbose_name_plural="13. Roadmaps"

    def __str__(self):
        return f'{self.name} ({self.get_type_display()})'

# Favorite courses 
class StudentFavoriteCourse(models.Model):

    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    status = models.BooleanField(default=False)

    class Meta:
        verbose_name_plural = "14. Student Favorite Courses"

    def __str__(self):
        return f"{self.course} - {self.student}"







