from django.db import models

class Theme(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    cover_image = models.ImageField(upload_to='theme_covers/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    difficulty_level = models.CharField(max_length=50, choices=[('easy', 'Easy'), ('medium', 'Medium'), ('hard', 'Hard')], default='medium')
    tags = models.ManyToManyField('Tag', related_name='themes', blank=True)

    def __str__(self):
        return self.name

class Tag(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name
