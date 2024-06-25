from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import serializers
from django.contrib.auth import authenticate

from .models import User

class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, attrs):
        user = authenticate(**attrs)
        if not user:
            raise serializers.ValidationError("Invalid username or password")
        return user

    def create(self, validated_data):
        refresh = RefreshToken.for_user(validated_data)
        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
