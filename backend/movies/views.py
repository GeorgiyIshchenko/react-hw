from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate
from rest_framework import viewsets, pagination
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Movie
from .serializers import MovieSerializer

class MoviePagination(pagination.PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100

class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all().order_by('id')
    serializer_class = MovieSerializer
    pagination_class = MoviePagination

@api_view(['POST'])
@csrf_exempt
def login_view(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(request, username=username, password=password)
    if user is not None:
        return Response({'detail': 'Login successful'}, status=status.HTTP_200_OK)
    else:
        return Response({'detail': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)
