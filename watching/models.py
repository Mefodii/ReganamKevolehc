from django.db import models
from django.db.models import Q

from django.core.validators import MaxValueValidator, MinValueValidator

VIDEO_TYPE_ANIME = "Anime"
VIDEO_TYPE_MOVIE = "Movie"
VIDEO_TYPE_SERIAL = "Serial"

VIDEO_STATUS_FINISHED = "Finished"
VIDEO_STATUS_ON_HOLD = "On Hold"
VIDEO_STATUS_NOT_WATCHING = "Not Watching"
VIDEO_STATUS_AIRING = "Airing"

VIDEO_TYPE_CHOICES = (
    (VIDEO_TYPE_ANIME, VIDEO_TYPE_ANIME),
    (VIDEO_TYPE_MOVIE, VIDEO_TYPE_MOVIE),
    (VIDEO_TYPE_SERIAL, VIDEO_TYPE_SERIAL),
)

VIDEO_STATUS_CHOICES = (
    (VIDEO_STATUS_FINISHED, VIDEO_STATUS_FINISHED),
    (VIDEO_STATUS_AIRING, VIDEO_STATUS_AIRING),
    (VIDEO_STATUS_ON_HOLD, VIDEO_STATUS_ON_HOLD),
    (VIDEO_STATUS_NOT_WATCHING, VIDEO_STATUS_NOT_WATCHING),
)


class VideoQuerySet(models.QuerySet):
    def movies(self):
        return self.filter(
            Q(type=VIDEO_TYPE_MOVIE) & Q(parent_video=None)
        )

    def anime(self):
        return self.filter(
            Q(type=VIDEO_TYPE_ANIME) & Q(parent_video=None)
        )

    def serials(self):
        return self.filter(
            Q(type=VIDEO_TYPE_SERIAL) & Q(parent_video=None)
        )


class Video(models.Model):
    name = models.CharField(max_length=150)
    # Alias name for video. Separated by string ">;<"
    alias = models.CharField(max_length=800, blank=True)
    year = models.IntegerField(blank=True)
    type = models.CharField(max_length=50, choices=VIDEO_TYPE_CHOICES)
    status = models.CharField(max_length=50, choices=VIDEO_STATUS_CHOICES, default=VIDEO_STATUS_FINISHED)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
    parent_video = models.ForeignKey("self", on_delete=models.CASCADE, null=True, related_name="side_story")

    objects = VideoQuerySet.as_manager()

    def __str__(self):
        return self.name


class Season(models.Model):
    video = models.ForeignKey(Video, related_name="season", on_delete=models.CASCADE)
    rating = models.IntegerField(default=0, validators=[MinValueValidator(0), MaxValueValidator(10)])
    season_number = models.IntegerField(default=1)
    episode_number = models.IntegerField(default=1)
    current_episode = models.IntegerField(default=0)
    watched = models.BooleanField(default=False)
    watched_at = models.DateField()
