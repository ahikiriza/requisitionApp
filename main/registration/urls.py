from django.urls import path
from django import urls
from .views import StudentDetail, StudentList, user_login, user_logout


urlpatterns = [
    path('students/', StudentList.as_view(), name="student-list"),
    path('student/<int:pk>/', StudentDetail.as_view(), name='student-detail'),
    path('login/', user_login, name='login'),
    path('logout/', user_logout, name='logout'),
]
