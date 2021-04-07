from rest_framework import serializers  
from .models import User
from nugget_app.serializers import NuggetSerializer

class UserSerializer(serializers.HyperlinkedModelSerializer):
    # nuggets = NuggetSerializer(many=True) ##this will show the nuggets each user has created in the user JSON response

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password'] #<--add "nuggets" if you uncomment above (need to address "required" issue)
        extra_kwargs = {'password': {'write_only': True}} #this prevents hashed password data from being visible in API response (but still is associated with the object)

    def create(self, data):
        user = User(email=data['email'], username=data['username'])
        user.set_password(data['password']) #this hashes a password (like bCrypt would)
        user.save()
        return user