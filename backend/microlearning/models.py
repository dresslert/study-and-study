from django.db import models
from themes.models import Theme

class MicroLearningContent(models.Model):
    theme = models.ForeignKey(Theme, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    content = models.TextField()
    estimated_time = models.DurationField()
