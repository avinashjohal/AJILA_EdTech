from django.contrib import admin

# Register your models here.
from . import models

admin.site.register(models.Teacher)
admin.site.register(models.CourseCategory)
admin.site.register(models.Course)
admin.site.register(models.Training)
admin.site.register(models.Internship)
admin.site.register(models.CourseChapter)
admin.site.register(models.TrainingChapter)
admin.site.register(models.InternshipChapter)
admin.site.register(models.Student)
admin.site.register(models.StudentCourseEnrollment)
admin.site.register(models.StudentTrainingEnrollment)
admin.site.register(models.StudentInternshipEnrollment)
admin.site.register(models.Roadmap)