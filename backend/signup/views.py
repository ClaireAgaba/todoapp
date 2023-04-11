from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from django.contrib.auth.models import User
from .models import SignUp
from rest_framework import viewsets
from .serializers import SignSerializer

# Create your views here.

class SignUpViewset(viewsets.ModelViewSet):
    serializer_class=SignSerializer
    queryset=SignUp.objects.all()
    

def signup(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            # check if the email is already taken
            email = form.cleaned_data.get('email')
            if User.objects.filter(email=email).exists():
                messages.error(request, 'Email is already taken.')
                return redirect('signup')
            
            # create the new user
            user = form.save()
            # Log the user in.
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=password)
            login(request, user)
            # Redirect to dashboard.
            return redirect('dashboard')
    else:
        form = UserCreationForm()
    return render(request, 'signup.html', {'form': form})

