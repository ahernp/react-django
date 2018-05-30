from rest_framework import routers

from django.conf.urls import url, include

from .views import (
    EntryViewSet,
    FeedViewSet,
    GroupViewSet,
    LogViewSet,
    PageViewSet,
    content_types,
)

router = routers.DefaultRouter()
router.register(r"entries", EntryViewSet)
router.register(r"feeds", FeedViewSet)
router.register(r"groups", GroupViewSet)
router.register(r"pages", PageViewSet)
router.register(r"log", LogViewSet)

urlpatterns = [
    url(r"^api-auth/", include("rest_framework.urls", namespace="rest_framework")),
    url(r"^pages/contenttypes/$", content_types),
    url(r"^", include(router.urls)),
]
