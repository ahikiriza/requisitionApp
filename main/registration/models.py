from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.utils import timezone

#Student model    
class Student(models.Model):
    id =models.AutoField(primary_key=True)
    name =models.CharField(max_length=25, blank=True)
    registrationNumber =models.CharField(max_length=255, blank=True)
    gender=models.CharField(max_length=20, null=True, blank=True)
    hall =models.CharField(max_length=255, blank=True)
    residence =models.CharField(max_length=255, blank=True)
    course =models.CharField(max_length=255, blank=True)
    telephone =models.CharField(max_length=20, blank=True)
    email =models.EmailField(blank=True)
    accountNumber =models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.name
    

#auth model
class CustomUserManager(BaseUserManager):
    def create_user(self, username, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        extra_fields.setdefault('is_active', True)
        user = self.model(username=username, email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(username, email, password, **extra_fields)

class CustomUser(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=30, blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    date_joined = models.DateTimeField(default=timezone.now)

    objects = CustomUserManager()

    USERNAME_FIELD = 'username'
    EMAIL_FIELD = 'email'
    REQUIRED_FIELDS = ['email']

    def __str__(self):
        return self.username
    