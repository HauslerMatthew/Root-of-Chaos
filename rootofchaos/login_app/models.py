from django.db import models
from django.contrib.auth.models import User

# the "django.contrib.auth.models import User" user model is username and password (with validations). to add more fields w/ validations follow the syntax below
# visit https://docs.djangoproject.com/en/3.1/ref/contrib/auth/ to review other avaialble fields and ways to interact with these objects. 

User._meta.get_field('email')._unique = True
User._meta.get_field('email').blank = False
User._meta.get_field('email').null = False