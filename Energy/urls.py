from django.urls import path
from . import views

urlpatterns = [
    path('', views.Energy, name='Energy'),
]