import pytest

from feedreader.factories import GroupFactory, EntryFactory
from pages.factories import PageFactory
from pages.models import CONTENT_TYPE_CHOICES


@pytest.mark.django_db(transaction=False)
def test_page_api_routes(client):
    page_one = PageFactory.create()
    page_two = PageFactory.create()

    response = client.get('/api/v1/pages/')
    assert response.status_code == 200
    assert isinstance(response.data, list)
    assert len(response.data) == 2
    assert 'title' in response.data[0]
    assert response.data[0]['title'] == page_one.title
    assert response.data[1]['title'] == page_two.title

    response = client.get('/api/v1/pages/{page_slug}/'.format(page_slug=page_two.slug))
    assert response.status_code == 200
    assert isinstance(response.data, dict)
    assert 'title' in response.data
    assert response.data['title'] == page_two.title


def test_page_contenttype_api_route(client):
    response = client.get('/api/v1/pages/contenttypes/')
    assert response.status_code == 200
    assert isinstance(response.data, list)
    assert len(response.data) == len(CONTENT_TYPE_CHOICES)


@pytest.mark.django_db(transaction=False)
def test_feedreader_api_routes(client):
    group_one = GroupFactory.create()
    entry_one = EntryFactory.create()

    response = client.get('/api/v1/groups/')
    assert response.status_code == 200
    assert isinstance(response.data, list)
    assert len(response.data) == 1
    assert 'name' in response.data[0]
    assert response.data[0]['name'] == group_one.name

    response = client.get('/api/v1/groups/{group_id}/'.format(group_id=group_one.id))
    assert response.status_code == 200
    assert isinstance(response.data, dict)
    assert 'name' in response.data
    assert response.data['name'] == group_one.name

    response = client.get('/api/v1/feeds/')
    assert response.status_code == 200
    assert isinstance(response.data, list)
    assert len(response.data) == 1
    assert 'title' in response.data[0]
    assert response.data[0]['title'] == entry_one.feed.title

    response = client.get('/api/v1/feeds/{feed_id}/'.format(feed_id=entry_one.feed_id))
    assert response.status_code == 200
    assert isinstance(response.data, dict)
    assert 'title' in response.data
    assert response.data['title'] == entry_one.feed.title

    response = client.get('/api/v1/entries/')
    assert response.status_code == 200
    assert isinstance(response.data, list)
    assert len(response.data) == 1
    assert 'title' in response.data[0]
    assert response.data[0]['title'] == entry_one.title

    response = client.get('/api/v1/entries/{entry_id}/'.format(entry_id=entry_one.id))
    assert response.status_code == 200
    assert isinstance(response.data, dict)
    assert 'title' in response.data
    assert response.data['title'] == entry_one.title
