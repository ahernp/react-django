"""
This command polls all of the Feeds and removes old entries.
"""
from django.core.management.base import BaseCommand
from django.utils import timezone

from ...models import Feed, Entry
from ...utils import poll_feed

from datetime import timedelta
import logging

logger = logging.getLogger('feedreader')

TIME_TO_KEEP_ENTRIES = timedelta(days=30)


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
        feeds = Feed.objects.all()
        num_feeds = len(feeds)
        oldest_entry_timestamp = timezone.now() - TIME_TO_KEEP_ENTRIES


        if verbose:
            print('%d feeds to process' % (num_feeds))

        for i, feed in enumerate(feeds):
            if verbose:
                print('(%d/%d) Processing Feed %s' % (i + 1, num_feeds, feed.title))

            poll_feed(feed, verbose)

            # Remove older entries
            entries = Entry.objects.filter(feed=feed,published_time__lt=oldest_entry_timestamp)

            for entry in entries:
                entry.delete()

            if verbose:
                print('Deleted %d entries from feed %s' % ((len(entries), feed.title)))

        logger.info('Feedreader poll_feeds completed successfully')
