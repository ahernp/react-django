from rest_framework import viewsets, permissions, status
from rest_framework.decorators import api_view, renderer_classes, permission_classes
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response

from core.models import Log
from feedreader.models import Group, Feed, Entry
from pages.models import Page,CONTENT_TYPE_CHOICES

from .serializers import GroupSerializer, FeedSerializer, EntrySerializer, LogSerializer, PageSerializer


class EntryViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    queryset = Entry.objects.all()
    serializer_class = EntrySerializer
    filter_fields = {
        'feed_id': ['exact'],
        'published_time': ['gt'],
    }

    def post(self, request, *args, **kwargs):
        if 'read_flag' in request.data and request.data['read_flag'] == 'toggle':
            entry = Entry.objects.get(pk=kwargs['pk'])
            entry.read_flag = not entry.read_flag
            entry.save()
            return Response({}, status=status.HTTP_200_OK)
        return Response({}, status=status.HTTP_400_BAD_REQUEST)

class FeedViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    queryset = Feed.objects.all()
    serializer_class = FeedSerializer
    filter_fields = {
        'title': ['icontains'],
        'group_id': ['exact'],
    }


class GroupViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class LogViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    queryset = Log.objects.all()
    serializer_class = LogSerializer
    filter_fields = {
        'datetime': ['gt'],
        'level': ['exact'],
    }


class PageViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    queryset = Page.objects.all()
    serializer_class = PageSerializer
    filter_fields = {
        'parent_id': ['exact'],
        'slug': ['exact'],
        'title': ['icontains'],
    }
    lookup_field = 'slug'


@api_view(('GET',))
@permission_classes((permissions.IsAuthenticatedOrReadOnly, ))
@renderer_classes((JSONRenderer,))
def content_types(request):
    content_types = [{'value': value, 'label': label} for value, label in CONTENT_TYPE_CHOICES]
    return Response(content_types)