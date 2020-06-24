from django.urls import path

from rest_framework import routers
from .api import VideoViewSet, SeasonViewSet, VideoList

router = routers.DefaultRouter()
router.register("api/videos", VideoViewSet, "videos")
router.register("api/seasons", SeasonViewSet, "seasons")

urlpatterns = [
    path("api/video_type/<video_type>/", VideoList.as_view()),
    path("api/video_type/", VideoList.as_view()),
]

urlpatterns += router.urls
