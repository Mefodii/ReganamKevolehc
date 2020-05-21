from rest_framework import serializers

from .models import Video, Season


class RecursiveField(serializers.ModelSerializer):
    def to_representation(self, value):
        serializer = self.parent.parent.__class__(value, context=self.context)
        return serializer.data


class SeasonSerializer(serializers.ModelSerializer):

    class Meta:
        model = Season
        fields = '__all__'


class VideoSerializer(serializers.ModelSerializer):
    side_story = RecursiveField(many=True)
    season = SeasonSerializer(many=True)

    class Meta:
        model = Video
        fields = '__all__'
