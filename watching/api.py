from .models import Video, Season
from rest_framework import viewsets, permissions
from .serializers import VideoSerializer, SeasonSerializer


class VideoViewSet(viewsets.ModelViewSet):
    queryset = Video.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = VideoSerializer


class MovieViewSet(viewsets.ModelViewSet):
    queryset = Video.objects.movies()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = VideoSerializer


class AnimeViewSet(viewsets.ModelViewSet):
    queryset = Video.objects.anime()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = VideoSerializer


class SerialViewSet(viewsets.ModelViewSet):
    queryset = Video.objects.serials()
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
