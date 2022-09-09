from django.db import models
import os
from django.core.exceptions import ValidationError
from datetime import datetime
def validate_file_extension(value):
    
    ext = os.path.splitext(value.name)[1]  # [0] returns path+filename
    valid_extensions = ['.pdf',  '.docx']
    if not ext.lower() in valid_extensions:
        raise ValidationError('Unsupported file extension.')

class hr_db(models.Model):
    Department_ID_CHOICES = (
    ("IT", "IT"),
    ("HR", "HR"),
    ("Finance", "Finance"),
   
    )

    Candidate_Full_Name=models.CharField(max_length=500)
    Date_of_Birth=models.DateField()
    Years_of_Experience=models.IntegerField()
    Department_ID = models.CharField(max_length=9,choices=Department_ID_CHOICES,default="IT")
    Resume = models.FileField(upload_to="documents/%Y/%m/%d", validators=[validate_file_extension])
    datetime_apply = models.DateTimeField(default=datetime.now)

    def __str__(self) -> str:
        return self.Candidate_Full_Name






