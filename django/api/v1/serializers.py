from rest_framework import serializers
from core.models import Log
from feedreader.models import Group, Feed, Entry
from pages.models import Page


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('id', 'name')


class FeedSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Feed
        fields = ('id', 'title', 'xml_url', 'link', 'description', 'published_time', 'last_polled_time', 'group_id')


class EntrySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Entry
        fields = ('id', 'title', 'link', 'description', 'published_time', 'read_flag', 'feed_id')


class LogSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Log
        fields = ('level', 'msg', 'datetime')


class ParentPageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Page
        fields = ('id',)


class PageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Page
        fields = ('id', 'title', 'slug', 'parent_id', 'updated', 'published', 'content_type', 'content')
        lookup_field = 'slug'
