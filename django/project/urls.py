from django.conf.urls import url, include, re_path
from django.contrib import admin

from core.views import HomePageView

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/v1/', include('api.v1.urls')),
    url(r'^core/', include('core.urls')),
    re_path('.*', HomePageView.as_view(), name='homepage')
]
