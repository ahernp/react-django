from pages.factories import PageFactory
from pages.models import MARKDOWN


def test_page():
    page = PageFactory.build()
    assert (
        page.content_type == MARKDOWN
    ), 'Expected content type to be "markdown" by default'
