from .models import Video, Season
from rest_framework import viewsets, permissions
from .serializers import VideoSerializer, SeasonSerializer


class VideoViewSet(viewsets.ModelViewSet):
    queryset = Video.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = VideoSerializer


class SeasonViewSet(viewsets.ModelViewSet):
    queryset = Season.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = SeasonSerializer
