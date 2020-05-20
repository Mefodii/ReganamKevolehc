from django.db import models

VIDEO_TYPE_ANIME = "Anime"
VIDEO_TYPE_MOVIE = "Movie"
VIDEO_TYPE_SERIAL = "Serial"

VIDEO_TYPE_CHOICES = (
    (VIDEO_TYPE_ANIME, VIDEO_TYPE_ANIME),
    (VIDEO_TYPE_MOVIE, VIDEO_TYPE_MOVIE),
    (VIDEO_TYPE_SERIAL, VIDEO_TYPE_SERIAL),
)


class Video(models.Model):
    name = models.CharField(max_length=150)
    # Alias name for video. Separated by string ">;<"
    alias = models.CharField(max_length=800, blank=True)
    year = models.CharField(max_length=5, blank=True)
    type = models.CharField(max_length=50, choices=VIDEO_TYPE_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)


class Season(models.Model):
    video = models.ForeignKey(Video, related_name="season", on_delete=models.CASCADE)
    season_number = models.IntegerField(default=1)
    episode_number = models.IntegerField(default=1)
    current_episode = models.IntegerField(default=0)
    watched = models.BooleanField(default=False)
    watched_at = models.DateTimeField()
