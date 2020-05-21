from rest_framework import routers
from .api import VideoViewSet, SeasonViewSet

router = routers.DefaultRouter()
router.register("api/videos", VideoViewSet, "videos")
router.register("api/seasons", SeasonViewSet, "seasons")

urlpatterns = router.urls
