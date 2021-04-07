"""rootofchaos URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.urls import path, include
from rest_framework import routers
from nugget_app import views
from login_app import views as user_views #prevents double "views" attribute conflicts

router = routers.DefaultRouter()
router.register(r'nuggets', views.NuggetViewSet)

urlpatterns = [
    path(r'api/', include(router.urls)),
    path(r'api/users', user_views.UserList.as_view()),
    path(r'api/users/<int:pk>', user_views.UserDetails.as_view()),
    path(r'api/sessions', user_views.UserSession.as_view())

]
