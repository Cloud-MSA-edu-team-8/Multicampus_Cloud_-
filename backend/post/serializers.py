## backend/post/serializers.py

from rest_framework import serializers
from .models import Post
'''
    django < - > react ( api request communication )
    >> JSON.. need serializer

'''

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        fields =(
            'id',
            'title',
            'content',
        )
        model = Post