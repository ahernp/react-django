from django.db import models


class Group(models.Model):
    """
    Group of feeds.
    """

    name = models.CharField(max_length=250, unique=True)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name


class Feed(models.Model):
    """
    Feed information.
    """

    title = models.CharField(max_length=2000, blank=True, null=True)
    xml_url = models.CharField(max_length=255, unique=True)
    link = models.CharField(max_length=2000, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    published_time = models.DateTimeField(blank=True, null=True)
    last_polled_time = models.DateTimeField(blank=True, null=True)
    group = models.ForeignKey(Group, blank=True, null=True, on_delete=models.SET_NULL)

    class Meta:
        ordering = ["title"]

    def __str__(self):
        return self.title or self.xml_url

    def save(self, *args, **kwargs):
        try:
            Feed.objects.get(xml_url=self.xml_url)
            super(Feed, self).save(*args, **kwargs)
        except Feed.DoesNotExist:
            super(Feed, self).save(*args, **kwargs)
            from feedreader.utils import poll_feed

            poll_feed(self)


class Entry(models.Model):
    """
    Feed entry information.
    """

    feed = models.ForeignKey(Feed, on_delete=models.CASCADE)
    title = models.CharField(max_length=2000, blank=True, null=True)
    link = models.CharField(max_length=2000)
    description = models.TextField(blank=True, null=True)
    published_time = models.DateTimeField(auto_now_add=True)
    read_flag = models.BooleanField(default=False)

    class Meta:
        ordering = ["-published_time"]
        verbose_name_plural = "entries"

    def __str__(self):
        return self.title
