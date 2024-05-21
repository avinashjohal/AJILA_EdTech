# Generated by Django 5.0.4 on 2024-05-11 10:45

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0011_alter_chapter_options_alter_student_options_and_more'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Chapter',
            new_name='CourseChapter',
        ),
        migrations.AlterModelOptions(
            name='student',
            options={'verbose_name_plural': '9. Students'},
        ),
        migrations.AlterModelOptions(
            name='studentcourseenrollment',
            options={'verbose_name_plural': '10. Enrolled Courses'},
        ),
        migrations.CreateModel(
            name='InternshipChapter',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=150)),
                ('description', models.TextField()),
                ('video', models.FileField(null=True, upload_to='chapter_videos/')),
                ('remarks', models.TextField(null=True)),
                ('internship', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='internship_chapters', to='main.internship')),
            ],
            options={
                'verbose_name_plural': '8. Chapters',
            },
        ),
        migrations.CreateModel(
            name='TrainingChapter',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=150)),
                ('description', models.TextField()),
                ('video', models.FileField(null=True, upload_to='chapter_videos/')),
                ('remarks', models.TextField(null=True)),
                ('training', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='training_chapters', to='main.training')),
            ],
            options={
                'verbose_name_plural': '7. Chapters',
            },
        ),
    ]