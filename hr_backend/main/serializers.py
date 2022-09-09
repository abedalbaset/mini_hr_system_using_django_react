from urllib import request
from rest_framework import serializers
from .models import hr_db


 
class hr_db_Serializer(serializers.ModelSerializer):
   
    class Meta:
        model = hr_db
        fields = ('id', 'Candidate_Full_Name', 'Date_of_Birth', 'Years_of_Experience','Department_ID','Resume','datetime_apply')

   