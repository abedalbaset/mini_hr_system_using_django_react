import imp
from django.test import TestCase
from . models import hr_db
from datetime import datetime




class test_database(TestCase):

    #this function test to test the database hr_db and add one row and see if its work 
    def test_model_database(self):

        name=hr_db.objects.create(
            Candidate_Full_Name="full name",
            Date_of_Birth="0001-01-01",
            Years_of_Experience=5,
            Department_ID="IT",
            datetime_apply=("2022-09-09 13:05:17.610879"),
            Resume=""

        
        )
      

        self.assertEqual(str(name),"full name")
      
