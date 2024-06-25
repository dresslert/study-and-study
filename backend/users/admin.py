# users/admin.py

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User
from gamification.models import UserBadge

class UserBadgeInline(admin.TabularInline):
    model = UserBadge
    extra = 1

@admin.register(User)
class UserAdmin(BaseUserAdmin):
    inlines = [UserBadgeInline]

    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        ('Personal info', {'fields': ('first_name', 'last_name', 'email', 'bio', 'avatar')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
        ('Progress Tracking', {'fields': ('current_theme', 'completed_themes')}),
        ('Learning Preferences', {'fields': ('learning_preferences',)}),
        ('Wearable Data', {'fields': ('wearable_data',)}),
        ('Activity Log', {'fields': ('activity_log',)}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'password1', 'password2'),
        }),
    )
    list_display = ('username', 'email', 'first_name', 'last_name', 'is_staff')
    search_fields = ('username', 'first_name', 'last_name', 'email')
    ordering = ('username',)
