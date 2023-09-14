from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient
from .models import CustomUser

# Create your tests here.
#api endpoint tests
class StudentAPITests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.student_data = {
            'name': 'Abaho John',
            'registrationNumber': '17/U/77/09',
            'gender': 'Male',
            'hall': 'Mandela',
            'residence': 'Non-Resident',
            'course': 'Computer Science',
            'telephone': '077656676',
            'email': 'abahojohne@gmail.com',
            'accountNumber': '45090123456'
        }

    def test_student_list(self):
        response = self.client.get(reverse('student-list'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_student(self):
        response = self.client.post(reverse('student-list'), self.student_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_student_detail(self):
        # Create a Student using the API endpoint
        create_response = self.client.post(reverse('student-list'), self.student_data, format='json')
        self.assertEqual(create_response.status_code, status.HTTP_201_CREATED)

        # Get the created Student's ID from the response
        student_id = create_response.data['id']

        # Fetch the Student using the API endpoint for detail
        response = self.client.get(reverse('student-detail', args=[student_id]))
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_update_student(self):
        # Create a Student using the API endpoint
        create_response = self.client.post(reverse('student-list'), self.student_data, format='json')
        self.assertEqual(create_response.status_code, status.HTTP_201_CREATED)

        # Get the created Student's ID from the response
        student_id = create_response.data['id']

        # Update the Student using the API endpoint
        updated_data = {
            'name': 'James',
            'registrationNumber': '17/U/77/09',
            'gender': 'Male',
            'hall': 'Nanziri',
            'residence': 'Non-Resident',
            'course': 'BCOM',
            'telephone': '077656676',
            'email': 'james@gmail.com',
            'accountNumber': '450987456'
        }
        response = self.client.put(reverse('student-detail', args=[student_id]), updated_data, format='json')

        # Debugging output
        print(response.content.decode('utf-8'))  

        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_delete_student(self):
        # Create a Student using the API endpoint
        create_response = self.client.post(reverse('student-list'), self.student_data, format='json')
        self.assertEqual(create_response.status_code, status.HTTP_201_CREATED)

        # Get the created Student's ID from the response
        student_id = create_response.data['id']

        # Delete the Student using the API endpoint
        response = self.client.delete(reverse('student-detail', args=[student_id]))
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

# Authenticatication tests

class AuthenticationTestCase(TestCase):
    def setUp(self):
        # Create a test user
        self.user = CustomUser.objects.create_user(
            username='henry',
            password='123',
            email='ahikirizahenry5@gmail.com',
        )

    def test_login(self):
        # Perform a login request
        response = self.client.post(reverse('login'), {
            'username': 'henry',
            'password': '123',
            'email': 'ahikirizahenry5@gmail.com',
        })
        print(response.content.decode('utf-8')) #debugging output
        # Check if the user is logged in (status code 200)
        self.assertEqual(response.status_code, 200)

    def test_logout(self):
        # Log the user in first
        self.client.login(username='henry', password='123', email='ahikirizahenry5@gmail.com',)

        # Perform a logout request
        response = self.client.post(reverse('logout'))
        print(response.content.decode('utf-8')) #debugging output

        # Check if the user is logged out (status code 200)
        self.assertEqual(response.status_code, 200)