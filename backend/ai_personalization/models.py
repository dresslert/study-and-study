from django.db import models
from users.models import User

class LearningPath(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    recommended_content = models.JSONField()
