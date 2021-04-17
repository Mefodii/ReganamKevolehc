from .models import Video, Season, ImageModel
from rest_framework import viewsets, permissions, generics
from .serializers import VideoRecursiveSerializer, VideoSerializer, SeasonSerializer, ImageModelSerializer


class VideoViewSet(viewsets.ModelViewSet):
    queryset = Video.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = VideoSerializer


class VideoList(generics.ListAPIView):
    serializer_class = VideoRecursiveSerializer

    def get_queryset(self):
        video_type = self.kwargs.get("video_type", None)
        print(video_type)
        return Video.objects.filter_by_type(video_type)


class SeasonViewSet(viewsets.ModelViewSet):
    queryset = Season.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = SeasonSerializer


class ImageModelViewSet(viewsets.ModelViewSet):
    queryset = ImageModel.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ImageModelSerializer
