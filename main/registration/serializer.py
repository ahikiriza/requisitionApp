from rest_framework import serializers
from .models import Student


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model =Student
        fields =('id', 'name', 'registrationNumber', 'gender', 'hall', 'residence', 'course','telephone', 'email', 'accountNumber')