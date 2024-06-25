# gamification/models.py

from django.db import models
from users.models import User

class Badge(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    icon = models.ImageField(upload_to='badges/', blank=True, null=True)
    category = models.CharField(max_length=100, blank=True, null=True)
    requirements = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

class UserBadge(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    badge = models.ForeignKey(Badge, on_delete=models.CASCADE)
    awarded_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.user.username} - {self.badge.name}"
