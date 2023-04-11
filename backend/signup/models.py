from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

# Create your models here.

"""
class SignUp
    firstName str
    lastName str
    password 
    date_created datetime
    
"""
class SignUp(models.Model):
    
     email=models.CharField(max_length=50)
     password=models.CharField(max_length=130) 

     def __str__(self):
         return self.email


