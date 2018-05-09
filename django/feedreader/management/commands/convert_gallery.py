"""
This command polls all of the Feeds and removes old entries.
"""
import json
from django.core.management.base import BaseCommand

from pages.models import Page

import logging

logger = logging.getLogger('feedreader')


class Command(BaseCommand):
    help = 'Polls all Feeds for Entries.'

    def add_arguments(self, parser):
        """
        Add named (optional) argument
        """
        parser.add_argument('--verbose',
                            action='store_true',
                            dest='verbose',
                            default=False,
                            help='Print progress on command line')

    def handle(self, *args, **options):
        """
        Read through all the feeds looking for new entries.
        """
        verbose = options['verbose']
        pages = Page.objects.filter(content_type='gallery')
        for page in pages:
            try:
                gallery = json.loads(page.content)
                markdown = ''
                for image in gallery['images']:
                    image_markdown = '[![{title}](https://ahernp.com{thumbnailUrl} "{title}")](https://ahernp.com{imageUrl})'.format(
                        title=image['title'],
                        imageUrl=image['imageUrl'],
                        thumbnailUrl=image['thumbnailUrl']
                    )
                    markdown += image_markdown + '\n'
                page.content = markdown
                page.save()
            except json.decoder.JSONDecodeError:
                print('JSONDecodeError', page.id)
