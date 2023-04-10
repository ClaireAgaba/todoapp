from django.shortcuts import render
from .models import SignUp
from rest_framework import viewsets
from .serializers import SignSerializer

# Create your views here.

class SignUpViewset(viewsets.ModelViewSet):
    serializer_class=SignSerializer
    queryset=SignUp.objects.all()
