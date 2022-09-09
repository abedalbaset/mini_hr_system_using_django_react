from urllib import request
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.request import Request

from rest_framework import viewsets 
from .serializers import hr_db_Serializer
from .models import hr_db
from rest_framework.decorators import api_view
from django.conf import settings
from django.core.files import File
from django.http import HttpResponse
import time 
import random
import string

def id_generator(size=15, chars=string.ascii_uppercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))

class hr_Main_View(viewsets.ModelViewSet):
    
    serializer_class = hr_db_Serializer
    #queryset = hr_db.objects.all().order_by('-datetime_apply')
    queryset=""



@api_view(['POST'])
def storedata(request):
    response = HttpResponse("")
    if request.method == 'POST':
        print("request data ** ",request.data)
        #request.data['Resume']="125.ts"
        serializer = hr_db_Serializer(data=request.data)

        
        if serializer.is_valid():
            #print("serializer.data ** ",serializer.validated_data['Resume'])
            extentionfile=str(serializer.validated_data['Resume']).split(".")[-1]
            filename=serializer.validated_data['Resume'].name
            serializer.validated_data['Resume'].name=settings.MEDIA_ROOT+"/"+str(time.time() )+" "+id_generator()+"."+extentionfile
            #print("serializer.data ** ",serializer.validated_data['Resume'])

            serializer.save()
            response = HttpResponse("Successfully uploaded")
    return response


@api_view(['GET'])
def getdbdata(request):

    try:
        #check header
        if((request.headers['X-ADMIN'])=='1'):
            
            queryset = hr_db.objects.all().order_by('-datetime_apply')
            serializer_class = hr_db_Serializer(queryset,many=True)
            return Response(serializer_class.data)
    except:        
    
        response = HttpResponse("")
        return response



@api_view(['GET'])
def Downloadfile(request):
    #print("**** header **** = ",request.headers['X-Admin'])
    response = HttpResponse("")
    if((request.headers['X-ADMIN'])=='1'):

        #Get filepath based on id
        idv=int(request.GET['id'])
        obj = hr_db.objects.filter(id=idv)
        serializer_class = hr_db_Serializer(obj,many=True)
        filepath=(serializer_class.data[0]['Resume'])

        #After get filepath based on id now read and return the Resume to be downloaded




        



        #################################### FOR store locally ######################################        
        #activate these two line for local store files 
        path_to_file = str(settings.MEDIA_ROOT).replace("documents","") + filepath
        fileobj = open(path_to_file, 'rb')     
        #################################### END FOR store locally ######################################

        #################################### FOR S3 ######################################
        #these two lines to read file from url on s3 , comment these if you want local storage instead of s3
        #path_to_file = filepath
        #fileobj = urllib.request.urlopen(path_to_file)

        #################################### END FOR S3 ######################################



        
        
        #print("path ** ",path_to_file)
        

        
        filedata = File(fileobj)
        response = HttpResponse(filedata.read())
        response['Content-Disposition'] = 's';

        
        response['filetype']="."+filepath.split(".")[-1];

    return response



