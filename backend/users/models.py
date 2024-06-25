from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    # Informações básicas
    bio = models.TextField(blank=True, null=True)
    avatar = models.ImageField(upload_to='avatars/', blank=True, null=True, verbose_name='Avatar')
    
    # Rastreamento de progresso
    current_theme = models.ForeignKey('themes.Theme', on_delete=models.SET_NULL, null=True, blank=True, related_name='users_with_current_theme')
    completed_themes = models.ManyToManyField('themes.Theme', related_name='completed_by_users', blank=True)
    
    # Preferências de aprendizado
    learning_preferences = models.JSONField(default=dict, blank=True)
    
    # Badges e recompensas
    points = models.IntegerField(default=0)
    badges = models.ManyToManyField('gamification.Badge', through='gamification.UserBadge', related_name='users_with_badge', blank=True)
    
    # Dados de wearables
    wearable_data = models.JSONField(default=dict, blank=True)
    
    # Histórico de atividades
    activity_log = models.JSONField(default=list, blank=True)
    
    # Ajuste de related_name para evitar conflitos
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='custom_user_set',  # Renomeie para evitar conflito
        blank=True
    )
    
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='custom_user_set',  # Renomeie para evitar conflito
        blank=True
    )

    def __str__(self):
        return self.username
