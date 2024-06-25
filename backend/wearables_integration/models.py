from django.db import models
from users.models import User

class WearableData(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    device_id = models.CharField(max_length=255)
    data = models.JSONField()
    timestamp = models.DateTimeField(auto_now_add=True)
