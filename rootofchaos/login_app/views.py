from .models import User
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserSerializer 
from django.contrib.auth import authenticate, login, logout

class UserList(APIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get(self, request, format=None):
        #return a list of users
        if request.user.is_authenticated: #must be logged in to start seeing data
            users = User.objects.all()
            serializer = UserSerializer(users, many=True)
            return Response(serializer.data)
        return Response({"errors": "You must be logged in to view this"})

    def post(self, request, format=None):
        #register (create) a new user
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            # log the registered user in -----------------------------------------------------------------
            user_from_db = User.objects.get(email=request.data.get('email', ''))
            user = authenticate(username=user_from_db.username,
                password = request.data.get('password', ''))
            login(request, user)
            # remove this block if you'd rather the user not be logged in on registering.-----------------

            return Response(serializer.data)
        return Response(serializer.errors)

class UserSession(APIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get(self, request, format=None):
        #return user if logged in
        print(request.user.is_authenticated)
        if request.user.is_authenticated:
            return Response(UserSerializer(request.user).data) # if user logged in, return their serialized data
        return Response(UserSerializer(User()).data) # if no user logged in, return a null user

    def post(self, request, format=None):
        #login method - if provided email and pw matches one in the db, it will put the user in session.  all other instances return an error
        try: 
            user_from_db = User.objects.get(email=request.data.get('email', ''))
            user = authenticate(username=user_from_db.username,
                password = request.data.get('password', ''))
            if user == None:
                return Response({'errors': 'Invalid login attempt!'})
            login(request, user)
            return Response(UserSerializer(user).data)
        except User.DoesNotExist as error:
            print(error)
        return Response({'errors': 'Invalid login attempt!'})

    def delete(self, request, format=None):
        #logout method
        logout(request)
        return Response({"message": "Goodbye!"})

class UserDetails(APIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_object(self, pk):
        try:
            return User.objects.get(pk=pk)
        except User.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        #return user matching id (pk)
        if request.user.is_authenticated:
            user = self.get_object(pk)
            serializer = UserSerializer(user)
            return Response(serializer.data) # if user logged in, return their serialized data
        return Response(UserSerializer(User()).data)

    #post can be used to change a pw or other field. 

    def put(self, request, pk, format=None):
        #update user matching id
        user = self.get_object(pk)
        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        #delete user matching id
        if request.user.is_authenticated:
            request.user.delete()
            return ({'message': 'user deleted'})
        return Response({'message': 'unable to delete user'}) 