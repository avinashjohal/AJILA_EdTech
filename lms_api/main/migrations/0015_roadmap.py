# Generated by Django 5.0.4 on 2024-05-18 09:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0014_alter_coursechapter_options'),
    ]

    operations = [
        migrations.CreateModel(
            name='Roadmap',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(choices=[('skill', 'Skill'), ('role', 'Role')], max_length=10)),
                ('name', models.CharField(max_length=100)),
                ('steps', models.JSONField()),
            ],
        ),
    ]
