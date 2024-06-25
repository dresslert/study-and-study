from django.db import models
from themes.models import Theme

class ARContent(models.Model):
    theme = models.ForeignKey(Theme, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    ar_file = models.FileField(upload_to='ar_content/')
