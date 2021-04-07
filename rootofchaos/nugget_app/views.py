from .models import Nugget # MediaType, File
from .serializers import NuggetSerializer
from rest_framework import viewsets


class NuggetViewSet(viewsets.ModelViewSet):
    queryset = Nugget.objects.all()
    serializer_class = NuggetSerializer
