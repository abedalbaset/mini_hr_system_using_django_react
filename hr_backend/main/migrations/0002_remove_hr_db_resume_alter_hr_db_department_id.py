# Generated by Django 4.1.1 on 2022-09-08 06:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='hr_db',
            name='Resume',
        ),
        migrations.AlterField(
            model_name='hr_db',
            name='Department_ID',
            field=models.CharField(choices=[('IT', 'IT'), ('HR', 'HR'), ('Finance', 'Finance')], default='IT', max_length=9),
        ),
    ]
