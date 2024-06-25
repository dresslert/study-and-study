from django.db import models
from users.models import User

class PerformanceData(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    data = models.JSONField()
    timestamp = models.DateTimeField(auto_now_add=True)
