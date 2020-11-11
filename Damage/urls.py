from django.urls import path
from . import views

urlpatterns = [
    path('', views.Damage, name='Damage'),
]
