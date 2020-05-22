from rest_framework import routers
from .api import VideoViewSet, SeasonViewSet, MovieViewSet, AnimeViewSet, SerialViewSet

router = routers.DefaultRouter()
router.register("api/videos", VideoViewSet, "videos")
router.register("api/movies", MovieViewSet, "movies")
router.register("api/anime", AnimeViewSet, "anime")
router.register("api/serials", SerialViewSet, "serials")
router.register("api/seasons", SeasonViewSet, "seasons")

urlpatterns = router.urls
