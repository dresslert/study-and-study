from django.urls import path
from rest_framework import generics, permissions
from .views import UserList, UserDetail, UserLogin

urlpatterns = [
    path('', UserList.as_view(), name='user-list'),
    path('<int:pk>/', UserDetail.as_view(), name='user-detail'),
    path('login/', UserLogin.as_view(), name='user-login'),
]

# Proteger as visualizações com IsAuthenticated
UserList.permission_classes = [permissions.IsAuthenticated]
UserDetail.permission_classes = [permissions.IsAuthenticated]
