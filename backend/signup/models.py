from django.db import models

# Create your models here.

"""
class SignUp
    firstName str
    lastName str
    password 
    date_created datetime
    
"""
class SignUp(models.Model):
     firstName=models.CharField(max_length=50)
     lastName=models.CharField(max_length=50)
     username=models.CharField(max_length=10)
     password=models.CharField(max_length=130) 
     
     def __str__(self):
          return self.username  

