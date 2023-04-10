from .models import SignUp
from rest_framework import serializers

class SignSerializer(serializers.ModelSerializer):
    class Meta:
        model=SignUp
        fields='__all__'
