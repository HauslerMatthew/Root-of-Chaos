from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index),
    path('register_user', views.register_user),
    path('login_user', views.login_user),
    path('dashboard', views.dashboard),
    path('logout', views.logout),
]