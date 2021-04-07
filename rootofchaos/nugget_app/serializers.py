from rest_framework import serializers
from .models import Nugget # MediaType, File
from login_app.models import User


class NuggetSerializer(serializers.HyperlinkedModelSerializer):
    user = serializers.CharField(read_only=True)  # this defaults "username" as the nugget creator
    user_id = serializers.CharField(read_only=True) 

    class Meta:
        model = Nugget
        fields = ['id', 'text', 'user', 'user_id', 'created_at', 'updated_at'] #'media_type', 'file'

    def create(self, data):
        request = self.context.get('request', None)
        if request.user.is_authenticated:
            nugget = Nugget(
                text = data['text'],
                user = request.user
            )
            nugget.save()
            return nugget
        raise serializers.ValidationError({"errors": "You must be logged in to do this!"}) 