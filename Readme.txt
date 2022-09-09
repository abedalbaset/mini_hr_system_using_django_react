About :

The project for mini hr done with two main part :

Django to handle the backend 
Reactjs to handle the front end 

Addtional :

- This project can handle S3 
- its include unit test to test the database by adding one row 



-----------------------------------------------------------------------------

Installation :

you need to have installed python3 , django , NodeJS , NPM , reactjs , pip 
install requirements.txt in hr_backend 



Setup the database :
in your mysql database create database name : hr_db 
and update the .env file with your username and your password for your database 


run backend :
navigate to hr_backend in termeninal/cmd and run :
-  python manage.py migrate
-  python manage.py makemigrations
-  python manage.py runserver


run frontend :
run frontedn by navigate to hr_frontend and using termeninal/cmd  run these commands :

- npm run build 
- npm start 


note its by default will run backend and frontend in localhost: 
frontend: http://127.0.0.1:3000
backend: http://127.0.0.1:8000

if these port or ip different you need to update these in settings.py in backend and package.json in frontend


---------------------------------------------------------------------------------------


Use S3:

If you want to upload files on s3 you need to uncomment these in settings.py 
and update these values using .env and add them to settings.py


DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

DEFAULT_FILE_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'

AWS_ACCESS_KEY_ID = ''

AWS_SECRET_ACCESS_KEY = ''

AWS_STORAGE_BUCKET_NAME ='hrequevu'

AWS_QUERYSTRING_AUTH = False


also in views.py you need to uncomment these line to make the view able to download from url instead of locally 

	#################################### FOR S3 ######################################
        #these two lines to read file from url on s3 , comment these if you want local storage instead of s3
        #path_to_file = filepath
        #fileobj = urllib.request.urlopen(path_to_file)

        #################################### END FOR S3 ######################################





---------------------------------------------------------------------------------------

For unit test , 

there one function created in tests.py to check the database connection by adding one row to it.
you can run this test using terminal and type : python manage.py test


